export default function Footer() {
    return (
      <footer className="bg-black bg-opacity-80 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>Email: <a href="mailto:support@mcpagentsai.com" className="underline hover:text-mcp-purple">support@mcpagentsai.com</a></p>
            <p>Github: <a href="https://github.com/MCPAgents/agency" className="underline hover:text-mcp-purple">@mcpagents</a></p>
            <p>Twitter: <a href="https://x.com/mcpagentai?s=21&t=IrGkUBzm35569bCilBv5oA" className="underline hover:text-mcp-purple">@mcpagents</a></p>
            <p>CA: <a href="https://pump.fun/coin/Gck774DrZPddYeeU3Pm58WSzi4Eo4oXKPNf1yJVLt5DGpump" className="underline hover:text-mcp-purple">Gck774DrZPddYeeU3Pm58WSzi4Eo4oXKPNf1yJVLt5DG</a></p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} MCP Agents.</p>
          </div>
        </div>
      </footer>
    )
  }
  