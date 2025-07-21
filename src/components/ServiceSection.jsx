import React from 'react'

const ServiceSection = () => {
    return (
        <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-24'>
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
            </div>
        </section> 
    )
}

export default ServiceSection
