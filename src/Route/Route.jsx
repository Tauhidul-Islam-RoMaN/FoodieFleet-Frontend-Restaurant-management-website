import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Home from "../Pages/Home";
import ErrorElement from "../Pages/ErrorElement";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
])

export default myCreatedRoute;