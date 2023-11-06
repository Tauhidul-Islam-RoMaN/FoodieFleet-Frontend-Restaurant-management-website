import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Home from "../Pages/Home";
import ErrorElement from "../Pages/ErrorElement";
import AllFood from "../Pages/AllFood";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyAddedFood from "../Pages/MyAddedFood";
import MyOrderedFood from "../Pages/MyOrderedFood";
import AddAFood from "../Pages/AddAFood";
import UpdateAFood from "../Pages/UpdateAFood";
import SingleFoodCard from "../Pages/SingleFoodCard";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/allFood',
                element:<AllFood></AllFood>,
                loader: () => fetch('http://localhost:5000/allFood')

            },
            {
                path:'/allFood/:id',
                element:<SingleFoodCard></SingleFoodCard>,
                loader: ({params}) => fetch(`http://localhost:5000/allFood/${params.id}`)

            },
            {
                path:'/blogs',
                element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addedFood',
                element:<MyAddedFood></MyAddedFood>
            },
            {
                path:'/addAFood',
                element:<AddAFood></AddAFood>
            },
            {
                path:'/updateFood',
                element:<UpdateAFood></UpdateAFood>
            },
            {
                path:'/orderedFood',
                element:<MyOrderedFood></MyOrderedFood>
            },
        ]
    },
])

export default myCreatedRoute;