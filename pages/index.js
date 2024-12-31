import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Use cjs instead of esm

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MCP Agents | Landing</title>
      </Head>

      <section className="max-w-4xl mx-auto my-8 space-y-6">
        
        {/* LOGO + Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image 
              src="/mcp-logo-small.png" 
              alt="MCP Agents Logo" 
              width={80} 
              height={80} 
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-mcp-purple">
            MCP Agents
          </h1>
        </div>

        <p className="leading-7 text-lg md:text-xl">
          The <strong>Model Context Protocol (MCP)</strong> is the next step 
          forward in AI agent architectures. It standardizes context sharing 
          across AI systems and models for seamless integration.
        </p>

        <p className="leading-7 text-lg md:text-xl">
          With the <strong>MCPAgent SDK</strong>, developers can easily interact 
          with MCP-compliant servers, execute tools, retrieve resources, and 
          integrate custom AI workflows.
        </p>

        {/* Getting Started Code Block */}
        <div className="my-8 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-mcp-purple">Getting Started</h2>
          <p className="mb-4 text-center">
            A quick example using the MCPAgent SDK:
          </p>
          <SyntaxHighlighter language="python" style={oneDark} customStyle={{ borderRadius: '8px' }}>
{`# Use the MCPAgent class to interact with an MCP server
from mcpagent import MCPAgent
import asyncio

async def main():
    agent = MCPAgent("server_multi.py")
    await agent.start()
    
    # Retrieve a resource
    info = await agent.read_info("Python")
    print("Info Resource:", info)
    
    # Call a tool
    result = await agent.multiply(7, 8)
    print("Multiply Result:", result)
    
    await agent.stop()

asyncio.run(main())
`}
          </SyntaxHighlighter>
        </div>

        <p className="leading-7 text-lg md:text-xl">
          Ready to dive deeper? Check out our <strong>Tech Docs</strong> to 
          learn how you can integrate MCP into your projects.
        </p>
      </section>
    </Layout>
  )
}
