import React, { useState } from 'react';
import usePublicApi from '../../Hooks/useAxiosPublic';

const AddItem = () => {
    const [ name, setName ] = useState( '' );
    const [ description, setDescription ] = useState( '' );
    const [ image, setImage ] = useState( null );
    const [ cover, setCover ] = useState( null );

    const publicApi = usePublicApi();

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append( 'image', image );
        try {
            const res = await publicApi.post( '/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ( progressEvent ) => {
                    const progress = Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 );
                    console.log( progress );
                }
            } );
            console.log( res.data.profile_url );
        } catch ( error ) {
            console.log( error );
        }
    };

    const uploadCover = async () => {
        const formData = new FormData();
        formData.append( 'cover', cover );
        try {
            const res = await publicApi.post( '/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ( progressEvent ) => {
                    const progress = Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 );
                    console.log( progress );
                }
            } );
            console.log( res.data.profile_url );
        } catch ( error ) {
            console.log( error );
        }
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append( 'name', name );
        formData.append( 'description', description );
        formData.append( 'image', image );
        formData.append( 'cover', cover );
        publicApi.post( 'api/project', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } ).then( ( res ) => {
            console.log( res );
        } ).catch( ( error ) => {
            console.log( error );
        } );
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
                        onChange={ ( e ) => setName( e.target.value ) }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        onChange={ ( e ) => setDescription( e.target.value ) }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                        Cover Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        onChange={ ( e ) => setCover( e.target.files[ 0 ] ) }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                        Project Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        multiple
                        onChange={ ( e ) => setImage( e.target.files ) }
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