import React from 'react';
import ProjectCart from './ProjectCart';
import { useQuery } from '@tanstack/react-query';
import usePublicApi from '../../Hooks/useAxiosPublic';

const Projects = () => {
    const axiosPublic = usePublicApi();
    const { data: product = [], isPending: loading, refetch }
        = useQuery( {
            queryKey: [ 'product' ],
            queryFn: async () => {
                const res = await axiosPublic.get( '/api/project' );
                return res.data;
            }
        } );
    if ( loading ) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <>
            <div id='projects' className="p-10">
                <div className="grid sm:grid-cols-2 bg-slate-50 p-10 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
                    { product.map( ( item, index ) => (
                        <ProjectCart key={ index } name={ item.name } cover_image={ item.cover_image } herf={ item.id } season={ item.season } />
                    ) ) }
                </div>

            </div>
        </>
    );
};

export default Projects;