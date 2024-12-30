import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative bg-gradient-to-r from-nav-gradient-start to-nav-gradient-end px-4 py-3 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="cursor-pointer flex items-center space-x-2">
              {/* If using next/image */}
              <Image 
                src="/mcp-logo-small.png" 
                alt="MCP Agents Logo" 
                width={40} 
                height={40} 
              />
              <span className="text-xl font-bold">MCP Agents</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="/">
              <span className="hover:underline cursor-pointer">Home</span>
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-2 px-4 text-lg">
          <li>
            <Link href="/">
              <span className="block py-2 hover:underline cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/tech-docs">
              <span className="block py-2 hover:underline cursor-pointer">Tech Docs</span>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <span className="block py-2 hover:underline cursor-pointer">Roadmap</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
