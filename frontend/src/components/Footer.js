import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-6'>
            <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left'>
                <div>
                    <h3 className='text-lg font-semibold'>About Us</h3>
                    <p className='text-sm mt-2'>Empowering businesses with innovative digital solutions. We specialize in web development, design, and marketing.</p>
                </div>

                <div>
                    <h3 className='text-lg font-semibold'>Quick Links</h3>
                    <ul className='mt-2 space-y-2'>
                        <li><Link to='/about' className='hover:text-gray-400'>About Us</Link></li>
                        <li><Link to='/contact' className='hover:text-gray-400'>Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-semibold'>Follow Us</h3>
                    <div className='flex justify-center md:justify-start gap-4 mt-2'>
                        <a href='#' className='text-gray-400 hover:text-white'><FaFacebookF /></a>
                        <a href='#' className='text-gray-400 hover:text-white'><FaTwitter /></a>
                        <a href='#' className='text-gray-400 hover:text-white'><FaInstagram /></a>
                        <a href='#' className='text-gray-400 hover:text-white'><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-700 mt-6 pt-4 text-center text-sm'>
                &copy; {new Date().getFullYear()} CHATHURYA. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
