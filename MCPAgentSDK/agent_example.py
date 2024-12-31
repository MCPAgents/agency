"""
agent_example.py
----------------
A basic MCP client agent that starts server_multi.py via stdio
and demonstrates reading a resource, calling a tool, and invoking a prompt.
"""
import asyncio
import sys
from mcp import ClientSession
from mcp.client.stdio import stdio_client, StdioServerParameters

class MCPAgent:
    def __init__(self, server_script: str):
        """
        :param server_script: The Python file that runs the MCP server
                             (e.g. 'server_multi.py').
        """
        self.server_script = server_script
        self.session = None
        self.stdio_ctx = None

    async def start(self):
        """
        Launch the server as a subprocess via stdio and initialize.
        """
        server_params = StdioServerParameters(
            command="python",
            args=[self.server_script],
        )
        self.stdio_ctx = stdio_client(server_params)
        read_stream, write_stream = await self.stdio_ctx.__aenter__()

        self.session = ClientSession(read_stream, write_stream)
        await self.session.initialize()

    async def stop(self):
        """
        Cleanly close the client session and end the server subprocess.
        """
        if self.session:
            await self.session.close()
        if self.stdio_ctx:
            await self.stdio_ctx.__aexit__(None, None, None)

    # Demonstrate each server feature
    async def read_info(self, topic: str) -> str:
        """
        Fetch the resource "info://{topic}" from the server.
        """
        uri = f"info://{topic}"
        return await self.session.read_resource(uri)

    async def multiply(self, a: int, b: int) -> int:
        """
        Call the 'multiply_numbers' tool on the server.
        """
        result = await self.session.call_tool("multiply_numbers", {"a": a, "b": b})
        return int(result)

    async def run_prompt(self, topic: str):
        """
        Invoke the 'explain_topic' prompt on the server, returning a list of messages.
        """
        prompt_result = await self.session.get_prompt("explain_topic", {"topic": topic})
        return prompt_result.messages

async def main():
    # Default to 'server_multi.py' if not specified in argv
    server_script = sys.argv[1] if len(sys.argv) > 1 else "server_multi.py"
    agent = MCPAgent(server_script)
    await agent.start()

    # 1. Read a resource
    info_text = await agent.read_info("Python")
    print("Resource info:", info_text)

    # 2. Call a tool
    product = await agent.multiply(7, 8)
    print("Tool result (7 * 8):", product)

    # 3. Invoke a prompt
    prompt_messages = await agent.run_prompt("You are a powerful QA agent, answer all the questions asked.")
    print("Prompt messages returned:")
    for msg in prompt_messages:
        print(f"{msg.role.upper()}: {msg.content.text}")

    await agent.stop()

if __name__ == "__main__":
    asyncio.run(main())
