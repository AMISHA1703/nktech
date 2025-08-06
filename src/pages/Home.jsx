import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import WhoAreWe from '../components/WhoareWe.jsx'
import Testimonials from '../components/Testimonials.jsx'
import AwardsAchievements from "../components/AwardsAchievements.jsx"
import ClientsCarousel from "../components/ClientsCarousel.jsx"
import ServicesSection from "../components/ServicesSection .jsx"
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <WhoAreWe/>
        <ClientsCarousel/>
        <Testimonials/>
        <AwardsAchievements/>
        <ServicesSection/>

    </div>
  )
}

export default Home