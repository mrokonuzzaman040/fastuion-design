import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { config } from '../../config';

const Navbar = () => {
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav className="relative w-full bg-gray-300 border-gray-200 h-28  mx- py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto0" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link className="flex-none text-xl font-semibold dark:text-white" to={ '/' } aria-label="Brand">
                        {
                            config.navbar.logo.src ? (
                                <img className="w-24 h-24" src={ config.navbar.logo.src } alt={ config.navbar.logo.alt } />
                            ) : (
                                <span className="flex items-center gap-x-2">
                                    <span className="text-[#FF6B81]">Raisa </span>
                                    <span className="text-[#FF6B81]">Fashion Designer</span>
                                </span>
                            )
                        }
                    </Link>
                    <div className="md:hidden">
                        <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                        {
                            config.navbar.links.map( ( link, index ) => {
                                return (
                                    <a key={ index } className="font-medium text-gray-700 hover:text-gray-400 md:py-6" href={ link.link }>{ link.name }</a>
                                );
                            } )
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;