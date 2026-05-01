import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaTwitter } from 'react-icons/fa6';

const Contact = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Log the form data to the console (backend simulation)
    console.log('📬 New contact request:', formData);

    // Show alert to the customer
    alert('✅ Your request has been processed! We’ll get back to you soon.');

    // Optional: clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-linear-to-r from-gray-900 via-dark-800 to-gray-900'
    >
      <div className='container mx-auto px-6'>
        <h2 className='font-bold text-3xl text-center mb-4'>Get In<span className='text-purple-500'>Touch</span></h2>
        <p className='text-center text-gray-200 max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auo'>
          {/* Contact Form */}
          <div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  type="text"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  type="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  required
                />
              </div>
              <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple700 transition duration-300 cursor-pointer'>
                Send
              </button>
            </form>
          </div>

          {/* Contact Information (unchanged) */}
          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-300'>Lahore, Gulberg 3</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-300'>shiekhsubhan62@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaPhone />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-300'>+92 03044473935</p>
              </div>
            </div>

            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
              <div className='flex space-x-4'>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-dark hover:text-white transition duration-300'>
                  <FaGithub />
                </a>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue hover:text-white transition duration-300'>
                  <FaLinkedin />
                </a>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue hover:text-white transition duration-300'>
                  <FaTwitter />
                </a>
                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-orange hover:text-white transition duration-300'>
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;