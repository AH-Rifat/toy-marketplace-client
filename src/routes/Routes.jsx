import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page404 from "../pages/Page404";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";


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