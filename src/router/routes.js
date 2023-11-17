import React from "react";
import { About } from "../pages/About";
import Posts from "../pages/Posts";
import { PostIdPage } from "../pages/PostIdPage";
import { Login } from "../pages/Login";

export const privateRoutes = [
    { path: "/*", element: <Posts></Posts>, exact: true, index: true },
    { path: "/about", element: <About></About>, exact: true },
    {
        path: "/posts/:id",
        element: <PostIdPage></PostIdPage>,
        exact: true,
    },
];

export const publicRoutes = [
    { path: "/*", element: <Login></Login>, exact: true, index: true },
    { path: "/about", element: <About></About>, exact: true },
];
