import React, { useState } from 'react';

const AddItem = () => {
    const [ name, setName ] = useState( '' );
    const [ description, setDescription ] = useState( '' );
    const [ image, setImage ] = useState( null );

    const handleNameChange = ( e ) => {
        setName( e.target.value );
    };

    const handleDescriptionChange = ( e ) => {
        setDescription( e.target.value );
    };

    const handleImageChange = ( e ) => {
        setImage( e.target.files[ 0 ] );
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Reset the form fields
        setName( '' );
        setDescription( '' );
        setImage( null );
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={ handleSubmit } className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={ name }
                        onChange={ handleNameChange }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={ description }
                        onChange={ handleDescriptionChange }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        onChange={ handleImageChange }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;