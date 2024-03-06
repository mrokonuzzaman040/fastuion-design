import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">

            <div className="text-center">
                <div className='flex items-center justify-center'>
                    <Link className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ '/' } aria-label="Brand">
                        {
                            config.navbar.logo.src ? (
                                <img className="h-8 sm:h-10" src={ config.navbar.logo.src } alt={ config.navbar.logo.alt } />
                            ) : (
                                config.navbar.logo.alt
                            )
                        }
                    </Link>
                </div>


                <div className="mt-3">
                    <p className="text-gray-500">We're part of the <a className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Htmlstream</a> family.</p>
                    <p className="text-gray-500">© Preline. 2022 Htmlstream. All rights reserved.</p>
                </div>


                <div className="mt-3 space-x-2">
                    <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" target='_blank' to={ '/' }>
                        <FaLinkedinIn className="flex-shrink-0 size-3.5" />
                    </Link>
                    <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" target='_blank' to={ '/' }>
                        <FaFacebook className="flex-shrink-0 size-3.5" />
                    </Link>

                    <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" target='_blank' to={ '/' }>
                        <FaInstagram className="flex-shrink-0 size-3.5" />
                    </Link>

                    <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" target='_blank' to={ '/' }>
                        <FaPinterest className="flex-shrink-0 size-3.5" />
                    </Link>

                    <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" target='_blank' to={ 'https://google.com' }>
                        <FaWhatsapp className="flex-shrink-0 size-3.5" />
                    </Link>

                </div>

            </div>

        </footer>
    );
};

export default Footer;