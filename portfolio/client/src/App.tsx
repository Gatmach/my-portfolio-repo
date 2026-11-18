
import { useState } from 'react'

import Navbar from './components/Navbar'
import type { Page } from './components/Navbar'

import Hero from './sections/Hero'
import Introduction from './sections/Introduction'
import About from './sections/About'
import Expertise from './sections/Expertise'
import Projects from './sections/Projects'
import CreativeServices from './sections/CreativeServices'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

import Footer from './components/Footer'

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Introduction />

      case 'about':
        return <About />

      case 'expertise':
        return <Expertise />

      case 'projects':
        return <Projects />

      case 'services':
        return <CreativeServices />

      case 'achievements':
        return <Achievements />

      case 'contact':
        return <Contact />

      default:
        return <Introduction />
    }
  }

  return (
    <>
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main>
        <Hero />
        {renderPage()}
      </main>

      <Footer />
    </>
  )
}
