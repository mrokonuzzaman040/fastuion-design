import React from 'react';
import ProjectCart from './ProjectCart';

const Projects = () => {
    return (
        <>
            <div id='projects' className="p-10">

                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Projects</h2>
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