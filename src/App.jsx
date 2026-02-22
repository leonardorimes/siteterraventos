import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertyCategories from './components/PropertyCategories'
import SearchWidget from './components/SearchWidget'
import SellProperty from './components/SellProperty'
import Founder from './components/Founder'
import BitupitaProject from './components/BitupitaProject'
import UpcomingLaunches from './components/UpcomingLaunches'
import Regions from './components/Regions'
import WindStudy from './components/WindStudy'
import About from './components/About'
import Consultation from './components/Consultation'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative w-full font-sans text-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <PropertyCategories />
      <SearchWidget />
      <SellProperty />
      <Founder />
      <BitupitaProject />
      <UpcomingLaunches />
      <Regions />
      <WindStudy />
      <About />
      <Consultation />
      <Footer />
    </div>
  )
}

export default App
