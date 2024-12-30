export default function Footer() {
    return (
      <footer className="bg-black bg-opacity-80 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>Email: <a href="mailto:support@mcpagentsai.com" className="underline hover:text-mcp-purple">support@mcpagentai.com</a></p>
            <p>Github: <a href="https://github.com/MCPAgents/agency" className="underline hover:text-mcp-purple">@mcpagents</a></p>
            <p>Twitter: <a href="https://x.com/vicunai_?s=11&t=IrGkUBzm35569bCilBv5oA" className="underline hover:text-mcp-purple">@mcpagents</a></p>
            <p>CA: <a href="123456788" className="underline hover:text-mcp-purple">@mcpagents</a></p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} MCP Agents.</p>
          </div>
        </div>
      </footer>
    )
  }
  