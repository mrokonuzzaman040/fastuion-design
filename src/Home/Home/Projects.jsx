import React from 'react';
import Product from '../ReUsable/Product';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8'>
            <div className="">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nunc vel aliquam tincidunt, nisl nunc aliquet nunc, vitae lacinia nunc nunc id nunc. Sed euismod, nunc vel aliquam tincidunt, nisl nunc aliquet nunc, vitae lacinia nunc nunc id nunc.</p>
            </div>
            <Product />
        </div>
    );
};

export default Projects;