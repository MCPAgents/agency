import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 md:px-8 lg:px-16 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
