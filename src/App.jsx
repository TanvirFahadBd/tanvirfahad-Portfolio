import React from 'react'
import "./app.scss"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
      <section id='Homepage'><Navbar />
        <Hero />
      </section>
      <section>peralax</section>
      <section id='services'>Services</section>
      <section id='porthfolio'>project1</section>
      <section>project2</section>
      <section>project3</section>
      <section>project4</section>
      <section id='contact'>contact</section>
      <section id='About'>About</section>
    </div>
  )
}

export default App
