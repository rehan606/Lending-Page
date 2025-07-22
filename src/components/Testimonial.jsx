import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation} from 'swiper/modules';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe", 
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg", 
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  
];


const Testimonial = () => {
    return (
        <section className='py-16 px-4 max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold md:text-4xl mb-4'>What Our Clients Say</h2>
                <p className=' text-gray-600 '>Don't just take our word for it. Here's what our clients have to say:</p>
            </div>

            {/* Swiper slider */}
            <div className='relative max-w-6xl mx-auto px-4 '>
                {/* swiper cards */}

                <Swiper
                    // slidesPerView={1}
                    spaceBetween={20}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    }}
                    modules={[Navigation]}
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className='bg-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center mb-5 hover:shadow-xl  hover:shadow-blue-100 duration-300'>
                            <div className='w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto border-2 border-gray-200 '>
                                <img src={testimonial.image} alt={testimonial.name} className='w-full h-full object-cover rounded-full' />
                            </div>

                            <div className='flex items-center justify-center mb-2'>
                                {[...Array(5)].map((_, starIndex) => (
                                    <svg
                                        key={starIndex}
                                        className={`w-5 h-5 inline-block ${starIndex < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-3.09 1.63.59-3.43L5 10l3.41-.49L10 6l1.59 3.51L15 10l-2.5 2.2.59 3.43L10 15z" />
                                    </svg>
                                ))}
                            </div>

                            <div className=' text-center  '>
                                <h3 className='text-lg font-semibold mb-2'>{testimonial.name}</h3>
                                <p className='text-gray-600'>{testimonial.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                     
                </Swiper>


                {/* custom button navigation */}
                <div className='flex justify-center gap-4 mt-6'>
                    <button className='w-12 h-12 group rounded-full border border-gray-600  shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200 swiper-button-prev-custom'>
                        <BsChevronLeft className='size-4 text-gray-600 group-hover:text-white' /> 
                    </button> 

                    <button className='w-12 h-12 group rounded-full border border-gray-600  shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200 swiper-button-next-custom'>
                        <BsChevronRight className='size-4 text-gray-600 group-hover:text-white' /> 
                    </button> 
                </div>
                

            </div>
        </section>
    )
}

export default Testimonial
