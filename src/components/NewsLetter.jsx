import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const NewsLetter = () => {
    return (
        <section className=' container py-16 px-4 mx-auto sm:px-6 lg:px-8 '>
            <div className="bg-blue-600  rounded-2xl shadow-lg overflow-hidden  ">
                <div className='relative md:px-16 py-16 px-6 md:py-24'>
                    <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>

                    <div className='relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12'>
                        {/* Left Content  */}
                        <div className='max-w-lg text-center md:text-left '>
                            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4'>Subscribe to our newsletter</h2>
                            <p className='text-white text-sm sm:text-base mb-6'>Stay updated with the latest news and exclusive offers.</p>
                        </div>

                        {/* Right Content  */}
                        <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-0 w-full sm:w-auto'>
                            
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className='w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none  text-gray-500 bg-white border-gray-300 focus:outline-none '
                                required
                            />
                            <button className='bg-green-500 text-white px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl flex items-center gap-2 hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 group'>
                                <span>Discover</span>
                                <HiArrowRight className='size-5 group-hover:translate-x-1 transition-transform duration-200' />
                            </button>

                            
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .clip-path-slant {
                        clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
                    }
                `}
            </style>
        </section>
    )
}

export default NewsLetter
