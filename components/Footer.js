export default function Footer() {
    return (
      <footer className="bg-black bg-opacity-80 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>Email: <a href="mailto:support@mcpagents.com" className="underline hover:text-mcp-purple">support@mcpagents.com</a></p>
            <p>Telegram: <a href="#" className="underline hover:text-mcp-purple">@mcpagents</a></p>
            <p>Twitter: <a href="#" className="underline hover:text-mcp-purple">@mcpagents</a></p>
            <p>CA: <span className="text-mcp-purple">California HQ</span></p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} MCP Agents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  