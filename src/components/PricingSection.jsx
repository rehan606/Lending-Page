import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeIn, } from '../utilities/motion';

const PricingSection = () => {

    const [productCount, setProductCount] = useState(1);

    // Calculate total price based on product count
    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));
    return (
        <section className='py-20 px-4 bg-gray-50'>
            <div className='max-w-6xl mx-auto'>
                <motion.h2 
                    variants={fadeIn('up', 0.1)}
                    initial="hidden"
                    whileInView="show"
                    className='text-2xl font-bold mb-6 text-center uppercase text-gray-700'>Pricing </motion.h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-2'>

                    {/* starter plan and business plan pricing */}
                    <motion.div 
                        variants={fadeIn('down', 0.2)}
                        initial="hidden"
                        whileInView="show"

                        className='bg-white p-8 rounded-lg shadow-lg'>
                        <h3 className='text-md font-semibold mb-2'>Starter Plan</h3>
                        <p className='text-2xl text-gray-700 font-bold'>${starterPrice}/mo</p>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView="show"
                        className='bg-white p-8 rounded-lg shadow-lg'>
                        <h3 className='text-md font-semibold mb-2'>Business Plan</h3>
                        <p className='text-2xl text-gray-700 font-bold'>${businessPrice}/mo</p>
                    </motion.div>
                </div>

                <div className='max-w-xl mx-auto mt-8'>
                    <motion.p 
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView="show"
                        className='text-center text-gray-600 mb-4 '>{productCount} Products
                    </motion.p>

                    <motion.div 
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        whileInView="show"

                        className='relative px-4'>
                        <div className='flex items-center  gap-2'>
                            <span className='text-gray-600 text-xs sm:text-sm'>1</span>
                            <input type="range" min="1" max="50" 
                            className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                            value={productCount} 
                            onChange={(e) => setProductCount(parseInt(e.target.value))} />
                            <span className='text-gray-600 text-xs sm:text-sm'>50</span>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView="show"
                        className='text-center mt-6'>
                        <p>Ready to Get Started?</p>
                        <button className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer'>Get Started</button>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

export default PricingSection
