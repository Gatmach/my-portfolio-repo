import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}