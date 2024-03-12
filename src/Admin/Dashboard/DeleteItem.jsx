import React from 'react';
import usePublicApi from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

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
        await publicApi.delete( `/api/project/${id}` );
        refetch();
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
                                    <img src={ item.image } alt={ item.name } className="w-20 h-20 object-cover" />
                                </td>
                                <td className="p-2 border">{ item.name }</td>
                                <td className="p-2 border">{ item.description }</td>
                                <td className="p-2 border">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={ () => {
                                        publicApi.delete( `/api/project/${item._id}` );
                                        refetch();
                                    } }>Delete</button>
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