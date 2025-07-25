
import './App.css'
import CompanyLogo from './components/CompanyLogo'
import FeaturesSection from './components/FeaturesSection'
import Hero from './components/Hero'
import Monitor from './components/Monitor'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import PricingSection from './components/PricingSection'
import PurposeSection from './components/PurposeSection'
import Schedule from './components/Schedule'
import ServiceSection from './components/ServiceSection'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <main className='relative min-h-screen overflow-hidden'>
        <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 '></div>
        <div className='overflow-hidden'>
          <Navbar/>
          <Hero/>
          <CompanyLogo/>
          <PurposeSection/>
          <FeaturesSection/>
          <Schedule/>
          <Monitor/>
          <PricingSection/>
          <ServiceSection/>
          <Testimonial/>
          <NewsLetter/>
          <Footer/>
        </div>
      </main>
      
    </>
  )
}

export default App
