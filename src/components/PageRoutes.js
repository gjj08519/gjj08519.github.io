import React from "react";
import Project from "./Project";
import Love from "./Love"
import Contact from "./Contact"
import Overview from "./Overview";

export const router = [
    {
        path: "/Project",
        element: <Project />,
    },
    {
        path: "/Love",
        element: <Love />,
    },
    
    {
        path: "/Overview",
        element: <Overview />,
    },
    {
        path: "/",
        element: <Overview />,
    },
]