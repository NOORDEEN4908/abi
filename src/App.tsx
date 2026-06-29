import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise-bg">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
