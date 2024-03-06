import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='max-w-[54rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8'>
            <div className="mx-auto max-w-2xl">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contact with <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Me!</mark> any time</h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        I'm always open to discussing product design work or partnership opportunities.
                    </p>
                </div>
            </div>

            <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
                <form>
                    <div className="mb-4 sm:mb-8">
                        <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full name</label>
                        <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Full name" />
                    </div>

                    <div className="mb-4 sm:mb-8">
                        <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
                        <input type="email" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email address" />
                    </div>

                    <div>
                        <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Comment</label>
                        <div className="mt-1">
                            <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows={ 3 } className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Leave your comment here..."></textarea>
                        </div>
                    </div>

                    <div className="mt-6 grid">
                        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;