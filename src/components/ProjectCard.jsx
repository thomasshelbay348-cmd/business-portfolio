import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-visible hover:-translate-y-2 transition duration-300 cursor-pointer min-h-[380px] flex flex-col'>
      <img 
        src={image} 
        alt={title} 
        className='w-full h-60 object-cover bg-gray-700 rounded-t-2xl' 
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/2d2d2d/a855f7?text=No+Image';
        }}
      />
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4 flex-grow'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{item}</span>
          ))}
        </div>
        <div className='flex gap-2 mt-auto'>
          <Link to='#' className='flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
            Demo View
          </Link>
          <Link to='#' className='flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple transition duration-300'>
            Code
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard