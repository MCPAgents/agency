import Layout from '@/components/Layout'
import Head from 'next/head'

export default function TechDocs() {
  return (
    <Layout>
      <Head>
        <title>MCP Agency | Tech Docs</title>
      </Head>
      <section className="max-w-4xl mx-auto my-8">
        <h1 className="text-3xl font-bold text-mcp-purple mb-4">Tech Docs</h1>

        {/* Python SDK */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">MCP Python SDK</h2>
          <p className="mb-4">
            The <strong>MCP Python SDK</strong> provides a straightforward way to integrate
            your Python applications with the MCP protocol. It handles API requests,
            authentication, and context management behind the scenes.
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Install the SDK via <code className="bg-black px-2 py-1 rounded">pip install modelcontext</code></li>
            <li>Configure the <code className="bg-black px-2 py-1 rounded">MCPClient</code> with your credentials</li>
            <li>Start generating or retrieving context with minimal setup</li>
          </ol>
          <pre className="p-4 bg-gray-900 text-green-300 rounded-lg overflow-auto mb-8">
{`from modelcontext import MCPClient

client = MCPClient(
    api_key="YOUR_API_KEY",
    base_url="YOUR_MCP_SERVER_URL"
)

response = client.generate("Integration test with MCP!")
print(response)
`}
          </pre>
        </article>

        {/* Create Python Server */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Create Python Server</h2>
          <p className="mb-4">
            The <strong>create-python-server</strong> tool bootstraps an MCP-compliant
            server, handling routing and context updates. Ideal for local testing or
            small-scale deployments.
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Install via <code className="bg-black px-2 py-1 rounded">pip install create-python-server</code></li>
            <li>Use the CLI to create a new project scaffold</li>
            <li>Configure your <code>.env</code> or settings file to reference your MCP keys</li>
          </ol>
          <pre className="p-4 bg-gray-900 text-green-300 rounded-lg overflow-auto mb-8">
{`# Initialize a new MCP Python server
create-python-server init my_mcp_server

# Navigate to the project folder
cd my_mcp_server

# Run the server
python main.py
`}
          </pre>
        </article>

        {/* MCP Servers */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">MCP Servers</h2>
          <p className="mb-4">
            The <strong>MCP Servers</strong> repository contains examples of production-ready
            configurations for hosting your MCP context. These servers serve as a central
            hub for AI model contexts, bridging your local environment and remote
            model endpoints.
          </p>
          <pre className="p-4 bg-gray-900 text-green-300 rounded-lg overflow-auto mb-8">
{`# Clone the servers repo
git clone https://github.com/modelcontextprotocol/servers.git

# Example: Running a local MCP server
cd servers/local-example
python server.py
`}
          </pre>
          <p>
            For advanced setups, consider using Docker or Kubernetes for containerized
            deployments, ensuring scalability and reliability.
          </p>
        </article>
      </section>
    </Layout>
  )
}
