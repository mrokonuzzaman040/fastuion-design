import React from 'react';

const ProjectCart = ( { name, cover_image, herf, season } ) => {
    return (
        <>
            <div className="flex-1 relative">
                <img src={ cover_image } alt="Fashion Model" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-white">
                        <p className="font-bold">{ name }</p>
                        <p>{ season }</p>
                    </div>
                    <a href={ `projectdetails/${herf}` } className="mt-2 inline-block bg-transparent  py-2 border-white border-2 px-4 text-white">See More</a>
                </div>
            </div>
        </>
    );
};

export default ProjectCart;

{/* <a className="group flex flex-col justify-between bg-white border shadow-sm  hover:shadow-md transition " href={ `projectdetails/${herf}` }>
            <div className="max-w-sm mx-auto flex justify-between relative shadow-md rounded-lg cursor-pointer">
                <div className="w-full">
                    <img src={ cover_image } className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="absolute flex bottom-0 left-0 right-0 h-32 bg-black bg-opacity-20 backdrop-blur text-white p-4 rounded-b-lg text-center justify-center items-center">
                    <h1 className="text-2xl font-semibold">{ name }</h1>
                </div>
            </div>
        </a> */}