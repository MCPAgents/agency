import Layout from '../components/Layout'
import Head from 'next/head'

export default function Roadmap() {
  return (
    <Layout>
      <Head>
        <title>MCP Agents | Roadmap</title>
      </Head>
      <section className="max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold text-mcp-purple text-center mb-12">Roadmap</h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-mcp-purple h-full"></div>

          {/* Milestone 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12 relative">
            <div className="w-6 h-6 bg-mcp-purple rounded-full absolute -left-3 md:-left-1/2 transform -translate-x-1/2"></div>
            <div className="md:w-1/2 md:pr-8 text-right">
              <h2 className="text-xl font-semibold text-gray-400">POC (Proof of Concept)</h2>
              <p className="text-gray-400">Demonstrated feasibility of the MCP protocol in a controlled environment.</p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="flex flex-col md:flex-row items-center mb-12 relative">
            <div className="w-6 h-6 bg-mcp-purple rounded-full absolute -left-3 md:-left-1/2 transform -translate-x-1/2"></div>
            <div className="md:w-1/2 md:pr-8 text-right">
              <h2 className="text-xl font-semibold text-gray-400">MVP (Minimum Viable Product)</h2>
              <p className="text-gray-400">Released a basic MCP-compliant server and client library for testing.</p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 relative">
            <div className="w-6 h-6 bg-mcp-purple rounded-full absolute -right-3 md:-right-1/2 transform translate-x-1/2"></div>
            <div className="md:w-1/2 md:pl-8 text-left">
              <h2 className="text-xl font-semibold text-mcp-purple">Scalability & Optimization</h2>
              <p>Improve server performance and reduce latency for real-time context sharing.</p>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 relative">
            <div className="w-6 h-6 bg-mcp-purple rounded-full absolute -right-3 md:-right-1/2 transform translate-x-1/2"></div>
            <div className="md:w-1/2 md:pl-8 text-left">
              <h2 className="text-xl font-semibold text-mcp-purple">Feature Enhancements</h2>
              <p>Add advanced context management tools, fine-grained access control, and multi-model orchestration.</p>
            </div>
          </div>

          {/* Milestone 5 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative">
            <div className="w-6 h-6 bg-mcp-purple rounded-full absolute -right-3 md:-right-1/2 transform translate-x-1/2"></div>
            <div className="md:w-1/2 md:pl-8 text-left">
              <h2 className="text-xl font-semibold text-mcp-purple">Community & Ecosystem</h2>
              <p>Establish official documentation, tutorials, and community forums for best practices and support.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
