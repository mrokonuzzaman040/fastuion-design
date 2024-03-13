import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';

const Footer = () => {
    return (
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">

            <div className="text-center">
                <div className='flex items-center justify-center'>
                    <Link className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ '/' } aria-label="Brand">
                        {
                            config.navbar.logo.src ? (
                                <img className="h-28 sm:h-16" src={ config.navbar.logo.src } alt={ config.navbar.logo.alt } />
                            ) : (
                                config.navbar.logo.alt
                            )
                        }
                    </Link>
                </div>


                <div className="mt-3">
                    <p className="text-gray-500"> Lamia Nafis Raisa <a className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Fashion Designer</a> Designer</p>
                    <p className="text-gray-500">©Lamianasifraisa 2024. All rights reserved.</p>
                </div>


            </div>

        </footer>
    );
};

export default Footer;