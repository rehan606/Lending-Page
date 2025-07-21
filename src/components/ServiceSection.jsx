import React from 'react'
import { BiTime } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'

const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
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
        <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 '>
                <div className='md:w-1/3 w-full'>
                    <h2 className='text-3xl md:text-4xl font-bold  mb-6 md:w-4/5  '>Festure of support with new shape</h2> 
                    <p className='text-lg  mb-4 text-gray-600 md:w-4/5'>  Discover your goals, determine success metrics, indentify problems</p> 
                    <div className='space-y-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span>UX Design content strategy</span>
                        </div>


                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span>Development bring</span>
                        </div>
                    </div>
                    <button className='bg-indigo-600 mt-6 hover:bg-indigo-700 transition-colors text-white py-2 px-6 rounded-full'>Get Started</button>
                </div>

                {/* Service Card  */}
                <div className=' md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    { 
                        services.map((service, index) => (
                            <div key={index} className='bg-white mx:w-72 shadow-lg rounded-2xl cursor-poiter hover:scale-105 transition-all  p-6 flex items-start flex-col gap-4 hover:shadow-xl duration-300'>
                                <div className='text-2xl mb-1'>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                                    <p className='text-gray-600 mb-4'>{service.description}</p>
                                    <a href={service.link} className='text-indigo-600 uppercase hover:underline'>Learn More</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section> 
    )
}

export default ServiceSection
