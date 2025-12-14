import React from 'react'
import "./app.scss"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Parallax from './components/Parallax/Parallax'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/porthfolio'


const App = () => {
  return (
    <div>
      <section id='Homepage'><Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section>
        <Parallax type="porthfolio" />
      </section>
      <Portfolio/>
      <section id='About'>About</section>
      <section id='contact'>contact</section>
    </div>
  )
}

export default App
