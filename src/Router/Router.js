import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Index from "../Pages/PopularPage";
import Battle from "../Pages/Battle";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/popular",
                element: <Index />,
            },
            {
                path: "/battle",
                element: <Battle />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ]
    },

]);

export default router