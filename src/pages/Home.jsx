import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import WhoAreWe from '../components/WhoareWe.jsx'
import Testimonials from '../components/Testimonials.jsx'
import AwardsAchievements from "../components/AwardsAchievements.jsx"
import ClientsCarousel from "../components/ClientsCarousel.jsx"
import ServicesSection from "../components/ServicesSection .jsx"
import Offer from "../components/Offer.jsx";
import  Productlist from "../pages/Products/Productlist.jsx"
import SoftwareAndApps from "../pages/SoftwareApps.jsx"
// import Quality from '../components/Quality.jsx'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <WhoAreWe/>
         <Offer/>
        <ServicesSection/>
        <ClientsCarousel/>
        <Testimonials/>
        <AwardsAchievements/>
         {/* <Productlist/> */}
         {/* <SoftwareAndApps/> */}
    </div>
  )
}

export default Home