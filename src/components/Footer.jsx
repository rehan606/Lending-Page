import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
                  <div className='flex items-center gap-1 cursor-pointer'>
                      <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                      <div className='w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2'></div>
                  </div>
            <p className="text-sm mb-4 mt-4">
              Delivering quality and trust through our services. Let’s build something great together.
            </p>
            <div className="flex space-x-3 text-xl">
              <a href="#" className="hover:text-white"><FaFacebook /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
            </div>
          </div>

          
            {/* Company Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Helpful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">How it Works</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Business Inquiry</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Email Us</a></li>
                <li className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-500" />
                  <a href="#" className="hover:text-white">WhatsApp</a>
                </li>
                <li><span className="text-green-400">Support 24/7</span></li>
              </ul>
            </div>
          
        </div>

        <div className=" flex items-center justify-between  text-xs text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          <p>Created by <span className="font-bold text-white">Rehan</span>  </p>
        </div>
      </div> 
    </footer>
  );
};