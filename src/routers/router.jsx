import React from "react";

import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../Home/HomeLayout";
import Home from "../Home/Home/Home";
import PagenotFound from "../Components/PagenotFound";
import Dashboard from "../Admin/Dashboard/Dashboard";
import DashboardLayout from "../Admin/DashboardLayout";
import AddItem from "../Admin/Dashboard/AddItem";
import DeleteItem from "../Admin/Dashboard/DeleteItem";
import Login from "../Login/Login";
import PrivateRoute from "../Auth/SecretRoute";

const router = createBrowserRouter( [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: "*",
        element: <PagenotFound />,
    },
    {
        path: "dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "add-item",
                element: <AddItem />,
            },
            {
                path: "delete-item",
                element: <DeleteItem />,
            },
        ],
    },
] );

export default router;