import React from 'react'
import { BiTime } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeIn, textVariant, } from '../utilities/motion';

const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600 " />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

const ServiceSection = () => {
    return (
        <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8' id='services'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 '>
                <div className='md:w-1/3 w-full'>
                    <motion.h2 
                        variants={textVariant(0.2)}
                        initial="hidden"
                        whileInView="show"
                        className='text-3xl md:text-4xl font-bold  mb-6 md:w-4/5  '>Festure of support with new shape
                    </motion.h2>
                    <motion.p 
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className='text-lg  mb-4 text-gray-600 md:w-4/5'>  Discover your goals, determine success metrics, indentify problems
                    </motion.p> 

                    <div className='space-y-3'>
                        <motion.div 
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView="show"
                            className='flex items-center gap-2'>
                            <div className='w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span>UX Design content strategy</span>
                        </motion.div>


                        <motion.div 
                            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView="show"
                            className='flex items-center gap-2'>
                            <div className='w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span>Development bring</span>
                        </motion.div>
                    </div>
                    <motion.button 
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView="show"
                        className='bg-indigo-600 mt-6 hover:bg-indigo-700 transition-colors text-white py-2 px-6 rounded-full'>Get Started</motion.button>
                </div>

                {/* Service Card  */}
                <div className=' md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    { 
                        services.map((service, index) => (
                            <motion.div key={index} 
                                variants={fadeIn('up', 0.4)}
                                initial="hidden"
                                whileInView="show"
                                className='bg-white mx:w-72 shadow-lg rounded-2xl cursor-poiter hover:scale-105 transition-all  p-6 flex items-start flex-col gap-4 hover:shadow-xl duration-300'>
                                <div className='text-2xl mb-1'>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                                    <p className='text-gray-600 mb-4'>{service.description}</p>
                                    <a href={service.link} className='text-indigo-600 uppercase hover:underline'>Learn More</a>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section> 
    )
}

export default ServiceSection
