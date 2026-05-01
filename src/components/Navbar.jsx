import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [showmenu, setshowmenu] = useState(false)

   return (
      <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
         <div className='container mx-auto flex justify-between items-center'>
            <div>
               <Link to="/hero" className='text-3xl font-bold text-white'>
                  Subhan
                  <span className='text-purple'>Ahmad</span>
                  <div className='w-4 h-4 bg-purple rounded-full'></div>
               </Link>
            </div>

            {/* Desktop menu */}
            <div className='hidden md:flex space-x-10'>
               <Link to="/hero" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Home</span>
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to="/about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>About</span>
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to="/skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Skills</span>
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to="/projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Projects</span>
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to="/experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Experience</span>
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to="/contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Contact</span>
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className='md:hidden'>
               {showmenu ? (
                  <FaXmark onClick={() => setshowmenu(!showmenu)} className='text-2xl cursor-pointer' />
               ) : (
                  <FaBars onClick={() => setshowmenu(!showmenu)} className='text-2xl cursor-pointer' />
               )}
            </div>
         </div>

         {/* Mobile menu dropdown */}
         {showmenu && (
            <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
               <Link onClick={() => setshowmenu(false)} to="/" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Home</span>
               </Link>
               <Link onClick={() => setshowmenu(false)} to="/about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>About</span>
               </Link>
               <Link onClick={() => setshowmenu(false)} to="/skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Skills</span>
               </Link>
               <Link onClick={() => setshowmenu(false)} to="/projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Projects</span>
               </Link>
               <Link onClick={() => setshowmenu(false)} to="/experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Experience</span>
               </Link>
               <Link onClick={() => setshowmenu(false)} to="/contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                  <span>Contact</span>
               </Link>
            </div>
         )}
      </nav>
   )
}

export default Navbar