import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center py-4 mb-8 bg-black bg-opacity-30">
      <ul className="flex space-x-8 text-lg">
        <li>
          <Link href="/">
            <span className="hover:underline cursor-pointer">MCP Agency</span>
          </Link>
        </li>
        <li>
          <Link href="/tech-docs">
            <span className="hover:underline cursor-pointer">Tech Docs</span>
          </Link>
        </li>
        <li>
          <Link href="/roadmap">
            <span className="hover:underline cursor-pointer">Roadmap</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
