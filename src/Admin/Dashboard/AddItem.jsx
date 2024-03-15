import React, { useState } from 'react';
import usePublicApi from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const AddItem = () => {
    const publicApi = usePublicApi();
    const [ image, setImage ] = useState( '' );
    const [ imgUrl, setImgUrl ] = useState( '' );
    const [ projectImageurls, setProjectImageUrls ] = useState( [] );
    const [ projectImages, setProjectImages ] = useState( [] );
    const [ uploadProgress, setUploadProgress ] = useState( 0 );

    const uploadCover = async () => {
        const formData = new FormData();
        formData.append( 'image', image );
        try {
            const res = await publicApi.post( 'upload/coverImages', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ( progressEvent ) => {
                    // @ts-ignore
                    const progress = Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 );
                    setUploadProgress( progress );
                }
            } );
            setImgUrl( res.data.image_url );

        } catch ( error ) {
            console.log( error );
        }
    }

    // console.log( projectImages );
    const uploadProjectImages = async () => {
        const formData = new FormData();
        for ( let i = 0; i < projectImages.length; i++ ) {
            formData.append( `image`, projectImages[ i ] );
        }
        try {
            const res = await publicApi.post( 'upload/multipleImages', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ( progressEvent ) => {
                    // @ts-ignore
                    const progress = Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 );
                    setUploadProgress( progress );
                }
            } );
            setProjectImageUrls( res.data.image_urls );
        } catch ( error ) {
            console.log( error );
        }
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const season = e.target.season.value;
        const data = {
            name,
            description,
            season,
            cover_image: imgUrl,
            project_image: projectImageurls,
        }

        // check before sending data if any of the fields are empty use SweetAlert
        if ( name === '' || description === '' || season === '' || imgUrl === '' || projectImageurls.length === 0 ) {
            Swal.fire( {
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            } );
            return;
        }

        try {
            const response = await publicApi.post( 'api/project', data );
            Swal.fire( {
                icon: 'success',
                title: 'Success',
                text: 'Project added successfully!',
            } );
            // reset the form
            e.target.reset();
            imgUrl && setImgUrl( '' );
            setProjectImageUrls( [] );
            setProjectImages( [] );

            console.log( response );
        } catch ( error ) {
            console.log( error );
        }

    };

    return (
        <div className="container mx-auto">
            <div className="max-w-lg mx-auto flex flex-col gap-4">
                {/* Upload Cover Image */ }
                <div className="">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2 ">
                        Cover Image:
                    </label>
                    <div className="flex items-center justify-center mb-4">
                        {
                            imgUrl && <img src={ imgUrl } alt="cover" className="w-1/2" />
                        }
                    </div>
                    <div className="flex justify-between gap-3 items-center">
                        <div className="">
                            <input
                                type="file"
                                id="image"
                                // @ts-ignore
                                onChange={ ( e ) => setImage( e.target.files[ 0 ] ) }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="">
                            <button
                                onClick={ uploadCover }
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Upload Cover
                            </button>
                        </div>
                    </div>
                </div>

                {/* Upload Project Images */ }
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                        Project Image:
                    </label>
                    <div className="max-w-max h-48">
                        {/* upload images and show it here */ }
                        <div className="grid grid-cols-4">
                            {
                                projectImageurls.map( ( image, index ) => (
                                    <div className='flex items-center' key={ index }>
                                        <img className='w-1/2' src={ image } alt="project" />
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <input
                                type="file"
                                id="images"
                                multiple
                                // @ts-ignore
                                onChange={ ( e ) => { setProjectImages( e.target.files ) } }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="">
                            {/* while uploading show a progess bar */ }
                            <button
                                onClick={ uploadProjectImages }
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Upload Images
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={ handleSubmit } className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Titel:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="">
                    <label htmlFor="season" className="block text-gray-700 text-sm font-bold mb-2">Season</label>
                    <input type="text"
                        id='season'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"

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
        </div >
    );
};

export default AddItem;