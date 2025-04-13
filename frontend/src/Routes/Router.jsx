import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/signin',
        element: <SignIn></SignIn>
    }
])

export default router;