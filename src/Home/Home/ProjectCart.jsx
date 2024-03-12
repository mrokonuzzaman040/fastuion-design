import React from 'react';

const ProjectCart = ( { name, cover_image, herf } ) => {
    return (
        <a className="group flex flex-col bg-white border shadow-sm  hover:shadow-md transition " href={ `projectdetails/${herf}` }>
            <div className="aspect-w-16 aspect-h-9">
                <img className="w-full object-cover rounded-t-xl" src={ cover_image } alt="Image Description" />
            </div>
            <div className="p-4 md:p-5">
                <h3 className="mt-2 text-lg font-medium text-gray-400 group-hover:text-black">
                    { name }
                </h3>
            </div>
        </a>
    );
};

export default ProjectCart;