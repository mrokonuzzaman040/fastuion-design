import React from 'react';

const ProjectCart = () => {
    return (
        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <div className="aspect-w-16 aspect-h-9">
                <img className="w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80" alt="Image Description" />
            </div>
            <div className="p-4 md:p-5">
                <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                    Business
                </p>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    What CFR really is about
                </h3>
            </div>
        </a>
    );
};

export default ProjectCart;