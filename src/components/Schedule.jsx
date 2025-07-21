import React from 'react'
import scheduleImage from '../assets/stats.webp'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Schedule = () => {
  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto ">
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            
            <div className='md:w-1/2 w-full'>
                <img src={scheduleImage} alt="schedule_image" className='w-full h-auto' />
            </div>

            <div className='md:w-1/2 w-full '>
                <p className='text-gray-600 mb-4 uppercase'>Schedule </p>
                <h2 className='text-3xl md:text-4xl font-bold text-natural-900 mb-6'>
                    Streamline Your Business! <br /> With Smart Scheduling Solutions
                </h2>
                
                <p className='text-gray-600 mb-8 '>
                    Join us in our journey as we strive to achieve our goals while maintaining a healthy work-life balance.
                </p>

                <a href="#" className='flex items-center text-blue-500 gap-2 hover:gap-5 font-semibold duration-200 '> Explore scheduling features <IoIosArrowRoundForward className='size-8' /> </a>
            </div>
        </div>
      
    </section> 
  )
}

export default Schedule
