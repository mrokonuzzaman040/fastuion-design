import React from 'react';
import usePublicApi from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';


const DeleteItem = () => {

    const publicApi = usePublicApi();

    const { data: product = [], isPending: loading, refetch }
        = useQuery( {
            queryKey: [ 'product' ],
            queryFn: async () => {
                const res = await publicApi.get( '/api/project' );
                return res.data;
            }
        } );

    if ( loading ) {
        return <div>Loading...</div>;
    }

    const deleteItem = async ( id ) => {
        Swal.fire( {
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        } ).then( async ( result ) => {
            if ( result.isConfirmed ) {
                publicApi.delete( `/api/project/${id}` ).then( res => {
                    refetch();
                } )
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }
        } );
    };

    return (
        <div>
            <div className="mb-10 flex justify-between">
                <div className="">
                    <h1 className="text-3xl font-semibold">Delete Item</h1>
                </div>
                <div className="">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={ () => refetch() }>Refresh</button>
                </div>
            </div>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-2 border">Image</th>
                        <th className="p-2 border">Title</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                {
                    product.map( ( item, index ) => (
                        <tbody key={ index }>
                            <tr>
                                <td className="p-2 border">
                                    <img src={ item.cover_image } alt={ item.name } className="w-20 h-20 object-cover" />
                                </td>
                                <td className="p-2 border">{ item.name }</td>
                                <td className="p-2 border">{ item.description }</td>
                                <td className="p-2 border">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={ () => deleteItem( item.id ) }>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ) )
                }
            </table>
        </div>
    );
};

export default DeleteItem;