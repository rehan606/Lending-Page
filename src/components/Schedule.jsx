import React from 'react'
import scheduleImage from '../assets/stats.webp'
import { IoIosArrowRoundForward } from 'react-icons/io'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeIn, textVariant, } from '../utilities/motion';

const Schedule = () => {
  return (
    <section className="px-4 py-12 md:py-4 max-w-7xl mx-auto ">
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            
            <motion.div 
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView="show"
                className='md:w-1/2 w-full'>
                <img src={scheduleImage} alt="schedule_image" className='w-full  h-auto' />
            </motion.div>

            <div className='md:w-1/2 w-full '>
                <motion.p 
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className=' mb-4 uppercase text-orange-500'>Schedule 
                </motion.p>

                <motion.h2 
                    variants={textVariant(0.4)}
                    initial="hidden"
                    whileInView="show"
                    className='text-3xl md:text-4xl font-bold text-natural-900 mb-6'>
                    Streamline Your Business! <br /> With Smart Scheduling Solutions
                </motion.h2>

                <motion.p 
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className='text-gray-600 mb-8 '>
                    Join us in our journey as we strive to achieve our goals while maintaining a healthy work-life balance.
                </motion.p>

                <motion.a 
                    href="#" 
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView="show" 

                    className='flex items-center text-blue-500 gap-2 hover:gap-5 font-semibold duration-200 '> Explore scheduling features <IoIosArrowRoundForward className='size-8' /> 
                </motion.a>
            </div>
        </div>
      
    </section> 
  )
}

export default Schedule
