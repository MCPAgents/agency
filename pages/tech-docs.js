import Layout from '../components/Layout'
import Head from 'next/head'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Use cjs instead of esm

export default function TechDocs() {
  return (
    <Layout>
      <Head>
        <title>MCP Agents | Tech Docs</title>
      </Head>
      <section className="max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold text-mcp-purple mb-4">Tech Docs</h1>

        {/* MCPAgent SDK */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">MCPAgent SDK</h2>
          <p className="mb-4 text-lg">
            The <strong>MCPAgent SDK</strong> simplifies interaction with MCP servers by handling subprocess communication, API requests, and context management seamlessly.
          </p>
          <ol className="list-decimal list-inside mb-4 text-lg">
            <li>Install the SDK: <code className="bg-black px-2 py-1 rounded">pip install mcp</code></li>
            <li>Initialize the <code>MCPAgent</code> class</li>
            <li>Start interacting with resources, tools, and prompts</li>
          </ol>
          <SyntaxHighlighter language="python" style={oneDark} customStyle={{ borderRadius: '8px' }}>
{`from mcpagent import MCPAgent
import asyncio

async def main():
    agent = MCPAgent("server_multi.py")
    await agent.start()
    
    info = await agent.read_info("ChatGPT")
    print("Resource Info:", info)
    
    result = await agent.multiply(5, 10)
    print("Tool Multiply Result:", result)
    
    await agent.stop()

asyncio.run(main())
`}
          </SyntaxHighlighter>
        </article>

        {/* Python Server */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Hosting MCP Servers</h2>
          <p className="mb-4 text-lg">
            Hosting an MCP server allows you to provide context, tools, and prompts to AI systems. Use the examples in the repository to get started:
          </p>
          <SyntaxHighlighter language="bash" style={oneDark} customStyle={{ borderRadius: '8px' }}>
{`# Clone the repository
git clone https://github.com/yourusername/mcpagentsdk.git

# Navigate to examples
cd mcpagentsdk/examples

# Run the multi-feature server
python server_multi.py
`}
          </SyntaxHighlighter>
        </article>

        {/* Advanced Setup */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Advanced Features</h2>
          <p className="mb-4 text-lg">
            The MCPAgent SDK supports advanced workflows like chaining prompts, async callbacks, and managing server events. Check out the repository for more details and examples.
          </p>
        </article>
      </section>
    </Layout>
  )
}
