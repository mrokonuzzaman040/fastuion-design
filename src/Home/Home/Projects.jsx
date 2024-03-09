import React from 'react';
import ProjectCart from './ProjectCart';

const Projects = () => {
    return (
        <>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Here is some of my resent work</h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-400"> You are most welcome to visit my work's. </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
                    {
                        [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) => (
                            <ProjectCart key={ index } />
                        ) )
                    }
                </div>

            </div>
        </>
    );
};

export default Projects;