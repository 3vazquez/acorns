import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Referral from './components/Referral'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Features />
      <Referral />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App