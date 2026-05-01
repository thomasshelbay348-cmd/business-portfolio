import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        
        {/* Left Side */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-purple-500'>Subhan Ahmad</span>
          </h1>

          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
            Full Stack Developer
          </h2>

          <p className='text-lg text-gray-300 mb-8'>
            I'm a Full Stack Developer who loves building apps that grow with your ideas. 
            I focus on clean code to make sure everything runs smoothly and stays easy to use.
          </p>

          <div className='flex flex-wrap gap-4'>
            <a 
              href='#projects' 
              className='px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300'
            >
              View Work
            </a>

            <a 
              href='#contact' 
              className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition'
            >
              Contact Me
            </a>

                 <a 
                   href={assets.ResumePdf}
                   download 
                   className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition'>
                       Download Resume
                </a>
          </div>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            
            <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 opacity-70 blur-lg'></div>

            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className='relative rounded-full w-full h-full object-cover z-10'
              src={assets.aboutImg} 
              alt="profile"
            />
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero