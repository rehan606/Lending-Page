import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeIn,  } from '../utilities/motion';

// const footerLinks = {
//     company: [
//       { name: 'About', href: '#' },
//       { name: 'Terms of Use', href: '#' },
//       { name: 'Privacy Policy', href: '#' },
//       { name: 'How it Works', href: '#' },
//       { name: 'Contact Us', href: '#' },
//     ],
//     getHelp: [
//       { name: 'Support Carrer', href: '#' },
//       { name: '24h Service', href: '#' },
//       { name: 'Quick Chat', href: '#' },
//     ],
//     support: [
//       { name: 'FAQ', href: '#' },
//       { name: 'Policy', href: '#' },
//       { name: 'Business', href: '#' },
//     ],
//     contact: [
//       { name: 'WhatsApp', href: '#' },
//       { name: 'Support 24', href: '#' },
//     ],
//   }

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10  ">
      <div className="container mx-auto ">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Logo & Description */}
          <div className="">
            {/* Logo  */}
                  <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className='flex items-center gap-1 cursor-pointer'>
                      <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                      <div className='w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2'></div>
                  </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              className="text-sm mb-4 mt-4">
              Delivering quality and trust through our services. Let’s build something great together.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              className="flex space-x-3 text-xl">
              <a href="#" className="hover:text-white"><FaFacebook /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
            </motion.div>
          </div>

          
            {/* Company Links */}
            <div>
              <motion.h3 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"
                className="text-white text-lg font-semibold mb-4">Company</motion.h3>
              <ul className="space-y-2 text-sm">
                <motion.li variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">About Us</a></motion.li>
                <motion.li variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Contact</a></motion.li>
                <motion.li variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Careers</a></motion.li>
                <motion.li variants={fadeIn('up', 0.5)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Blog</a></motion.li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <motion.h3 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"
                className="text-white text-lg font-semibold mb-4">Helpful Links
              </motion.h3>
              <ul className="space-y-2 text-sm">
                <motion.li variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">How it Works</a></motion.li>
                <motion.li variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Pricing</a></motion.li>
                <motion.li variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Resources</a></motion.li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <motion.h3 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"
                className="text-white text-lg font-semibold mb-4">Support</motion.h3>
              <ul className="space-y-2 text-sm">
                <motion.li variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">FAQ</a></motion.li>
                <motion.li variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Privacy Policy</a></motion.li>
                <motion.li variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Business Inquiry</a></motion.li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h3 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"
                className="text-white text-lg font-semibold mb-4">Contact
              </motion.h3>
              <ul className="space-y-2 text-sm">
                <motion.li variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show"><a href="#" className="hover:text-white">Email Us</a></motion.li>
                <motion.li 
                  variants={fadeIn('up', 0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-500" />
                  <a href="#" className="hover:text-white">WhatsApp</a>
                </motion.li>
                <motion.li variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show"><span className="text-green-400">Support 24/7</span></motion.li>
              </ul>
            </div>
          
        </div>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className=" flex items-center justify-between  text-xs text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          <p>Created by <span className="font-bold text-white">Rehan</span>  </p>
        </motion.div>
      </div> 
    </footer>
  );
};