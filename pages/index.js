import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MCP Agency | Landing</title>
      </Head>
      <section className="max-w-4xl mx-auto my-8 space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-mcp-purple">
          Welcome to MCP Agency
        </h1>

        <p className="leading-7">
          The <span className="font-semibold">Model Context Protocol (MCP)</span> is the next step forward in AI
          agent architectures. Released by Anthropic in late November 2024, the MCP
          specification aims to seamlessly connect AI models, contexts, and servers
          in a standardized manner. It defines how an AI model’s context can be
          shared across diverse systems, enabling more flexible and powerful AI
          capabilities.
        </p>

        <p className="leading-7">
          As outlined in{' '}
          <a
            href="https://www.anthropic.com/news/model-context-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mcp-purple hover:underline"
          >
            Anthropic’s press release
          </a>, 
          MCP is poised to become a backbone for large-scale AI solutions. The protocol 
          introduces the idea of <strong className="underline decoration-mcp-purple">MCP servers</strong> – 
          specialized services that handle context transmission, bridging multiple AI 
          models and external data streams. This synergy is crucial to achieving 
          robust, scalable AI that goes beyond single-model interactions.
        </p>

        <div className="my-8 p-6 bg-black rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            Here’s a quick snippet to get you started with MCP in a Python environment:
          </p>
          <pre className="p-4 overflow-auto bg-gray-900 text-green-300 rounded-lg">
{`# Install the MCP Python SDK
pip install modelcontext

# Example usage:
from modelcontext import MCPClient

client = MCPClient(api_key="YOUR_API_KEY", base_url="YOUR_MCP_SERVER_URL")
response = client.generate("Hello, MCP!")
print(response)
`}
          </pre>
        </div>

        <p className="leading-7">
          Ready to dive deeper? Check out our <strong>Tech Docs</strong> for more 
          detailed information on how to integrate MCP into your projects.
        </p>
      </section>
    </Layout>
  )
}
