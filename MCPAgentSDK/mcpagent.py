"""
mcpagent.py
-----------
A simple client agent that connects to our python_server.py MCP server.
It demonstrates reading a resource and calling a tool via the MCP protocol.
"""

import asyncio
from mcp import ClientSession
from mcp.client.stdio import stdio_client, StdioServerParameters

class MCPAgent:
    """
    MCPAgent is a high-level abstraction for interacting with an MCP server.
    It uses a stdio connection to run the MCP server as a subprocess,
    then provides methods to call resources and tools.
    """
    def __init__(self, server_script: str):
        """
        :param server_script: Path to the Python file that runs the MCP server.
                             For example: "python_server.py"
        """
        self.server_script = server_script
        self.session = None
        self._stdio_ctx = None

    async def start(self) -> None:
        """
        Launch the MCP server (as a subprocess) and initialize an MCP session.
        """
        # Configure parameters to launch the server script via stdio
        server_params = StdioServerParameters(
            command="python",
            args=[self.server_script],
            env=None,  # Optionally pass custom env vars here
        )

        # Open the stdio client context
        self._stdio_ctx = stdio_client(server_params)
        read_stream, write_stream = await self._stdio_ctx.__aenter__()

        # Create a ClientSession and initialize the connection
        self.session = ClientSession(read_stream, write_stream)
        await self.session.initialize()

    async def stop(self) -> None:
        """
        Gracefully close the MCP session and terminate the subprocess.
        """
        if self.session:
            await self.session.close()

        if self._stdio_ctx:
            await self._stdio_ctx.__aexit__(None, None, None)

    async def greet(self, name: str) -> str:
        """
        Reads the greeting resource for a given name.
        :param name: The name to greet.
        :return: A greeting message returned by the server.
        """
        # The resource is exposed as greeting://{name}
        resource_uri = f"greeting://{name}"
        return await self.session.read_resource(resource_uri)

    async def add_numbers(self, a: int, b: int) -> int:
        """
        Calls the 'add' tool on the server to add two numbers.
        :param a: First number
        :param b: Second number
        :return: Sum of a and b
        """
        # The tool is named "add", so we call it with the necessary arguments.
        result = await self.session.call_tool("add", arguments={"a": a, "b": b})
        return int(result)

# Example usage: python mcpagent.py
async def main():
    # Create an agent pointing to our "python_server.py" server
    agent = MCPAgent("python_server.py")
    # Start the server in a subprocess and initialize
    await agent.start()

    # Test reading a resource
    greeting_msg = await agent.greet("Alice")
    print("Greeting Resource:", greeting_msg)

    # Test calling a tool
    result = await agent.add_numbers(3, 5)
    print("Add Tool Result:", result)

    # Clean up
    await agent.stop()

if __name__ == "__main__":
    asyncio.run(main())
