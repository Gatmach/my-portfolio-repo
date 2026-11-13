
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Expertise from './sections/Expertise'
import CreativeServices from './sections/CreativeServices'
import Achievements from './sections/Achievements'
import Insights from './sections/Insights'
import Introduction from './sections/Introduction'


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Projects />
        <CreativeServices />
        <Expertise />
        <Achievements />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
