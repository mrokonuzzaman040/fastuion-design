
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";

import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


const HomeLayout = () => {
    const location = useLocation();
    useEffect( () => {
        window.HSStaticMethods.autoInit();
    }, [ location.pathname ] );

    return (
        <div className="">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;