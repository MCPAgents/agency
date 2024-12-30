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

        {/* Python SDK */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">MCP Python SDK</h2>
          <p className="mb-4 text-lg">
            The <strong>MCP Python SDK</strong> provides a straightforward 
            way to integrate your Python applications with the MCP protocol, 
            handling API requests and context management behind the scenes.
          </p>
          <ol className="list-decimal list-inside mb-4 text-lg">
            <li>
              Install the SDK: <code className="bg-black px-2 py-1 rounded">pip install modelcontext</code>
            </li>
            <li>Configure the <code className="bg-black px-2 py-1 rounded">MCPClient</code></li>
            <li>Start generating or retrieving context easily</li>
          </ol>
          <SyntaxHighlighter language="python" style={oneDark} customStyle={{ borderRadius: '8px' }}>
{`from modelcontext import MCPClient

client = MCPClient(
    api_key="YOUR_API_KEY",
    base_url="YOUR_MCP_SERVER_URL"
)

response = client.generate("Integration test with MCP!")
print(response)
`}
          </SyntaxHighlighter>
        </article>

        {/* Create Python Server */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Create Python Server</h2>
          <p className="mb-4 text-lg">
            The <strong>create-python-server</strong> tool bootstraps an 
            MCP-compliant server, perfect for local testing or small-scale 
            deployments.
          </p>
          <ol className="list-decimal list-inside mb-4 text-lg">
            <li>
              Install: <code className="bg-black px-2 py-1 rounded">pip install create-python-server</code>
            </li>
            <li>Use the CLI to scaffold a new project</li>
            <li>Configure your <code>.env</code> or settings file</li>
          </ol>
          <SyntaxHighlighter language="bash" style={oneDark} customStyle={{ borderRadius: '8px' }}>
{`# Initialize a new MCP Python server
create-python-server init my_mcp_server

# Navigate to project folder
cd my_mcp_server

# Run the server
python main.py
`}
          </SyntaxHighlighter>
        </article>

        {/* MCP Servers */}
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">MCP Servers</h2>
          <p className="mb-4 text-lg">
            The <strong>MCP Servers</strong> repository contains examples for 
            hosting your MCP context in production. These servers act as a 
            central hub for AI model contexts.
          </p>
          <SyntaxHighlighter language="bash" style={oneDark} customStyle={{ borderRadius: '8px' }}>
{`# Clone the servers repo
git clone https://github.com/modelcontextprotocol/servers.git

# Example: Running a local MCP server
cd servers/local-example
python server.py
`}
          </SyntaxHighlighter>
          <p className="text-lg">
            For advanced setups, consider Docker or Kubernetes for 
            containerized deployments.
          </p>
        </article>
      </section>
    </Layout>
  )
}
