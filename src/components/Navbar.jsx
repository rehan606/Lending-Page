import React, { useState } from 'react'
import { href } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        {href: "#home", label: "Home"},
        {href: "#about", label: "About Us"},
        {href: "#services", label: "Services"},
        {href: "#testimonials", label: "Testimonials"},
    ]

    return (
        <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm '>
            <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-8 md:h-20 h-16'>

                {/* Logo  */}
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                    <div className='w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2'></div>
                </div>

                {/* Desktop Nav items  */}
                <div className="hidden md:flex items-center gap-10">
                    {
                    navLinks.map((link, index ) => (
                        <a key={index} href={link.href} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink == link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                            {link.label}
                        </a>
                    ))
                    }
                </div>

                {/* Cta Button  */}

                {/* Mobile navigation  */}

            </div>
        </nav>
    )
}

export default Navbar
