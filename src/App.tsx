import './index.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Features'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
