import React, { useState } from 'react'

const PricingSection = () => {

    const [productCount, setProductCount] = useState(1);

    // Calculate total price based on product count
    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));
    return (
        <section className='py-20 px-4 bg-gray-50'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-2xl font-bold mb-6 text-center uppercase text-gray-700'>Pricing </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-2'>

                    {/* starter plan and business plan pricing */}
                    <div className='bg-white p-8 rounded-lg shadow-lg'>
                        <h3 className='text-md font-semibold mb-2'>Starter Plan</h3>
                        <p className='text-2xl text-gray-700 font-bold'>${starterPrice}/mo</p>
                    </div>
                    <div className='bg-white p-8 rounded-lg shadow-lg'>
                        <h3 className='text-md font-semibold mb-2'>Business Plan</h3>
                        <p className='text-2xl text-gray-700 font-bold'>${businessPrice}/mo</p>
                    </div>
                </div>

                <div className='max-w-xl mx-auto mt-8'>
                    <p className='text-center text-gray-600 mb-4 '>{productCount} Products</p>
                    <div className='ralative px-4'>
                        <div className='flex items-center  gap-2'>
                            <span className='text-gray-600 text-xs sm:text-sm'>1</span>
                            <input type="range" min="1" max="50" 
                            className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                            value={productCount} 
                            onChange={(e) => setProductCount(parseInt(e.target.value))} />
                            <span className='text-gray-600 text-xs sm:text-sm'>50</span>
                        </div>
                    </div>

                    <div className='text-center mt-6'>
                        <p>Ready to Get Started?</p>
                        <button className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PricingSection
