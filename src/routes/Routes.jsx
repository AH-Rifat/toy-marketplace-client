import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page404 from "../pages/Page404";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";
import AddToy from "../pages/AddToy";
import MyToys from "../pages/MyToys";
import AllToys from "../pages/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails";
import UpdateToy from "../pages/UpdateToy";
import Blogs from "../pages/Blogs";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/allToys",
                element: <AllToys />
            },
            {
                path: "/updateToyInfo/:id",
                element: <PrivateRoute> <UpdateToy /> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-ah-rifat.vercel.app/toy/${params.id}`)
            },
            {
                path: "/toyDetails/:id",
                element: <PrivateRoute> <ToyDetails /> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-ah-rifat.vercel.app/toy/${params.id}`)
            },
            {
                path: "/addToy",
                element: <PrivateRoute> <AddToy /> </PrivateRoute>
            },
            {
                path: "/myToys",
                element: <PrivateRoute> <MyToys /> </PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            }
        ]
    },
    {
        path: "*",
        element: <Page404 />
    },
]);

export default Router;