import React from 'react';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div id='contact' className='max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8'>
            <div className="mx-auto max-w-2xl">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight">Info</h1>
                </div>
                <div className="text-center">
                    3342 west 2nd avenue vancouver  Canada V6R 1J1
                </div>
                <div className="flex items-center justify-center">
                    <div className="mt-3 space-x-2">
                        <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 p-4" target='_blank' to={ 'https://www.linkedin.com/in/lamia-nasif-raisa-1bb114238/' }>
                            <FaLinkedinIn className="flex-shrink-0 text-3xl" />
                        </Link>
                        {/* <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 p-4" target='_blank' to={ '/' }>
                            <FaFacebook className="flex-shrink-0 text-3xl" />
                        </Link> */}

                        {/* <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 p-4" target='_blank' to={ 'https://www.instagram.com/nasif.raisa/?igshid=YmMyMTA2M2Y%3D' }>
                            <FaInstagram className="flex-shrink-0 text-3xl" />
                        </Link> */}

                        <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 p-4" target='_blank' to={ 'https://www.pinterest.com/nasifraisa/' }>
                            <FaPinterest className="flex-shrink-0 text-3xl" />
                        </Link>

                        <Link className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 p-4" target='_blank' to={ 'https://wa.me/16043399210' }>
                            <FaWhatsapp className="flex-shrink-0 text-3xl" />
                        </Link>

                    </div>
                </div>
            </div>

            <div className="mt-5 p-4 relative z-10 bg-gray-200 border sm:mt-10 md:p-10">
                <form>
                    <div className="mb-4 sm:mb-8">
                        <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium ">Full name</label>
                        <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full border-gray-200  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Full name" />
                    </div>

                    <div className="mb-4 sm:mb-8">
                        <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium ">Email address</label>
                        <input type="email" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border-gray-200  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Email address" />
                    </div>

                    <div>
                        <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium ">Comment</label>
                        <div className="mt-1">
                            <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows={ 3 } className="py-3 px-4 block w-full border-gray-200  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Leave your comment here..."></textarea>
                        </div>
                    </div>

                    <div className="mt-6 grid">
                        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold  border border-transparent bg-[#30312C] text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;