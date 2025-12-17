import React from 'react'
import "./app.scss"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Parallax from './components/Parallax/Parallax'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/porthfolio'
import Contact from './components/Contact/Contact'
import Cousor from './components/Cousor/Cousor'
import AboutMe from './components/Aboutme/AboutMe'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Cousor />
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
      <section id='porthfolio'><Portfolio /></section>
      <section id='porthfolio'></section>
      <section id='porthfolio'></section>
      <section id='porthfolio'></section>
      <section id='About'>
        <AboutMe/>
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <div className='footi'>
<Footer/>
      </div>
      
    </div>
  )
}

export default App
