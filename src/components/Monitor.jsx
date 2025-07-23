import React from 'react';
import monitorImage from '../assets/monitor-card.webp';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from "framer-motion"
import { fadeIn, textVariant } from '../utilities/motion';

const Monitor = () => {
  return (
    <section className="px-4 py-16 md:py-10 max-w-7xl mx-auto ">
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
    
            <div className='md:w-1/2 w-full md:pl-12'>
                <motion.p 
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className=' mb-4 uppercase text-green-500'>monitor 
                </motion.p>

                <motion.h2 
                    variants={textVariant( 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className='text-3xl md:text-4xl font-bold text-natural-900 mb-6'>
                     Introducing best mobile <br /> carousels
                </motion.h2>
                    
                <motion.p 
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className='text-gray-600 mb-8 '>
                    Before the ship is really back, round, all around the world. Round, and round we go. round, and round we go. Round, and round we go. Round, and round we go.
                </motion.p>
    
                <motion.a 
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    href="#" className='flex items-center text-blue-500 gap-2 hover:gap-5 font-semibold duration-200 '> Learn More about Monitoring <IoIosArrowRoundForward className='size-8' /> 
                </motion.a>
            </div>

            <motion.div 
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView="show"
                className='md:w-1/2 w-full'>
                <img src={monitorImage} alt="monitor_image" className='w-full h-auto' />
            </motion.div>
        </div>
          
    </section> 
  )
}

export default Monitor
