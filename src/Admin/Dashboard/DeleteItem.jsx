import React from 'react';

const DeleteItem = () => {
    return (
        <div>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-2 border">Image</th>
                        <th className="p-2 border">Title</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2 border"><img src="image-url" alt="item-image" /></td>
                        <td className="p-2 border">Item Title</td>
                        <td className="p-2 border">Item Description</td>
                        <td className="p-2 border"><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DeleteItem;