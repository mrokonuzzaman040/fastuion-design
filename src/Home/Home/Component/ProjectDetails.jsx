import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const data = useLoaderData();
    const dataDetails = data[ 0 ];
    const projectImages = JSON.parse( dataDetails.project_image );
    return (
        <>
            <div className="p-4">
                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">{ dataDetails.name }</h2>
                </div>
                <div className="flex justify-center items-center">
                    <img src={ dataDetails.cover_image } alt={ dataDetails.name } />
                </div>
            </div>
            <div className="">
                <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                    <p className="text-justify">{ dataDetails.description }</p>
                </div>
            </div>
            <div className="w-full">
                {
                    projectImages.map( ( image, index ) => (
                        <div key={ index } className="flex justify-center items-center">
                            <img src={ image } alt={ dataDetails.name } />
                        </div>
                    ) )
                }
            </div>
        </>
    );
};

export default ProjectDetails;