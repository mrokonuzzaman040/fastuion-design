import React from "react";

import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../Home/HomeLayout";
import Home from "../Home/Home/Home";

const router = createBrowserRouter( [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
] );

export default router;