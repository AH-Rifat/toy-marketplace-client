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
                element: <PrivateRoute><AllToys /></PrivateRoute>
            },
            {
                path: "/addToy",
                element: <AddToy />
            },
            {
                path: "/myToys",
                element: <MyToys />
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