// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CompanyLogo from './components/CompanyLogo'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PurposeSection from './components/PurposeSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className='relative min-h-screen overflow-hidden'>
        <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 '></div>
        <div className='overflow-hidden'>
          <Navbar></Navbar>
          <Hero></Hero>
          <CompanyLogo></CompanyLogo>
          <PurposeSection></PurposeSection>
        </div>
      </main>
      
    </>
  )
}

export default App
