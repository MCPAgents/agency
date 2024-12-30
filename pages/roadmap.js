import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Roadmap() {
  return (
    <Layout>
      <Head>
        <title>MCP Agency | Roadmap</title>
      </Head>
      <section className="max-w-4xl mx-auto my-8">
        <h1 className="text-3xl font-bold text-mcp-purple mb-4">Roadmap</h1>
        <ol className="list-decimal list-inside space-y-4">
          <li className="line-through decoration-2 decoration-mcp-purple">
            <strong>POC (Proof of Concept)</strong> – Demonstrated feasibility of
            the MCP protocol in a controlled environment.
          </li>
          <li className="line-through decoration-2 decoration-mcp-purple">
            <strong>MVP (Minimum Viable Product)</strong> – Released a basic
            MCP-compliant server and client library for testing.
          </li>
          <li>
            <strong>Scalability &amp; Optimization</strong> – Improve server
            performance and reduce latency for real-time context sharing.
          </li>
          <li>
            <strong>Feature Enhancements</strong> – Add advanced context
            management tools, fine-grained access control, and multi-model
            orchestration.
          </li>
          <li>
            <strong>Community &amp; Ecosystem</strong> – Establish official
            documentation, tutorials, and community forums for best practices
            and support.
          </li>
        </ol>
      </section>
    </Layout>
  )
}
