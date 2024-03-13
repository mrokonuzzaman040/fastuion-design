import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const data = useLoaderData();
    // @ts-ignore
    const detailData = data[ 0 ];
    const { name, description, cover_image, project_images } = detailData;
    console.log( data );
    return (
        <>
            <div className="max-w-4xl mx-auto p-10">
                <h2 className="text-2xl font-bold mb-5">{ name }</h2>
                <img src={ detailData.cover_image } alt={ cover_image } className="w-full h-96 object-cover mb-5" />
                <p className="mb-5">{ description }</p>
                {
                    // detailData.images && detailData.images.map( ( image, index ) => (
                    //     <img key={ index } src={ image } alt={ detailData.name } className="w-full h-96 object-cover mb-5" />
                    // ) )
                }
            </div>
        </>
    );
};

export default ProjectDetails;