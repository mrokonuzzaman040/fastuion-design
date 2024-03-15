import React from 'react';
import { FaLongArrowAltDown } from "react-icons/fa";


const Hero = () => {
    return (
        <div className="">
            <div className="">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="block font-medium text-gray-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Lamia Nasif Raisa
                        </h1>
                    </div>

                    {/* <div className="max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-400">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
                    </div> */}

                    {/* <div className="text-center">
                        <a className="text-2xl" href="#contact">
                            <div className="items-center flex justify-center flex-col">
                                Contact
                                <FaLongArrowAltDown />
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default Hero;