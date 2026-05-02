import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id='projects'
    className='py-20 bg-linear-to-r from-gray-900 via-dark-800 to-gray-900'
    >  
      <div className='container mx-auto px-6'>
        <h3 className='font-bold text-3xl text-center mb-4'>My<span className='text-purple-500'>Projects</span></h3>
        <p className='text-center text-gray-200 max-w-2xl mx-auto mb-16'>A selection of my recent work</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/* project */}
                {
                    projects.map((project, index)=>(
                      <ProjectCard key={index} {...project}/>    
                    ))
                }
            </div>
            <div className='text-center mt-12'>
                  <Link to='#' className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
                    <span>View More Projects</span>
                     <FaArrowRight className='ml-2'/>
                  </Link>
            </div>
      </div>
         
    </motion.div>
  )
}

export default Projects