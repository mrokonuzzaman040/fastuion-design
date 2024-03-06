import React from "react";

import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../Home/HomeLayout";
import Home from "../Home/Home/Home";
import PagenotFound from "../Components/PagenotFound";
import Dashboard from "../Admin/Dashboard/Dashboard";
import DashboardLayout from "../Admin/DashboardLayout";

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
    {
        path: "*",
        element: <PagenotFound />,
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
] );

export default router;