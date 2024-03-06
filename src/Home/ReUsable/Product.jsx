import React from 'react';

const Product = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex bg-slate-400 p-6 w-[640px] h-96 rounded-xl text-slate-700 text-center justify-center items-center">
                <div className="">
                    <h3>Product Name</h3>
                    <p>Product Description</p>
                </div>
            </div>
            <div className="flex bg-slate-400 p-6 w-[650px] h-96 rounded-xl text-slate-700 text-center justify-center items-center">
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Product;