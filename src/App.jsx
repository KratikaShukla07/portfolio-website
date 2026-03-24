import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Stats />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Education />
      <Footer />
    </div>
  )
}

export default App
