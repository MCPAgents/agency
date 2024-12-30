import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow px-4 md:px-8 lg:px-16">
        {children}
      </main>
    </div>
  )
}
