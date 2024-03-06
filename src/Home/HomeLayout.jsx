import React from "react";
import "preline/preline";
import "preline/preline.js";
import Home from "./Home/Home";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {

    return (
        <div className="">
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default HomeLayout;