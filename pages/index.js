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
          forward in AI agent architectures. Released by Anthropic in late 
          November 2024, it promises to unify AI models, contexts, and servers 
          under one future-proof standard. 
        </p>

        <p className="leading-7 text-lg md:text-xl">
          As highlighted in <a
            href="https://www.anthropic.com/news/model-context-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mcp-purple hover:underline"
          >
            Anthropic’s press release
          </a>, the MCP specification allows for 
          seamless context sharing across AI models, enabling more flexible 
          and powerful AI solutions. Central to this standard are 
          <strong className="underline decoration-mcp-purple"> MCP servers</strong>, 
          specialized services that transmit and manage context among multiple AI models.
        </p>

        {/* Getting Started Code Block */}
        <div className="my-8 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-mcp-purple">Getting Started</h2>
          <p className="mb-4 text-center">
            A quick snippet to begin your MCP journey in Python:
          </p>
          <SyntaxHighlighter language="python" style={oneDark} customStyle={{ borderRadius: '8px' }}>
{`# Install the MCP Python SDK
pip install modelcontext

# Example usage:
from modelcontext import MCPClient

client = MCPClient(api_key="YOUR_API_KEY", base_url="YOUR_MCP_SERVER_URL")
response = client.generate("Hello, MCP!")
print(response)
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
