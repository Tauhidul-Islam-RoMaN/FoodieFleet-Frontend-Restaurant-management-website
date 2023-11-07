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
import AddAFood from "../Pages/AddAFood";
import UpdateAFood from "../Pages/UpdateAFood";
import SingleFoodCard from "../Pages/SingleFoodCard";
import AllOrder from "../Pages/AllOrder";
import FoodPurchasePage from "../Pages/FoodPurchasePage";
// import PurchasedFoodGrid from "../Pages/PurchasedFoodGrid";

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
                element:<PrivateRoute><SingleFoodCard></SingleFoodCard></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allFood/${params.id}`)

            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
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
                element:<MyAddedFood></MyAddedFood>,
                loader: () => fetch('http://localhost:5000/allFood')

            },
            {
                path:'/addAFood',
                element:<AddAFood></AddAFood>
            },
            {
                path:'/purchase/:id',
                element:<PrivateRoute><FoodPurchasePage></FoodPurchasePage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allFood/${params.id}`)
            },
            {
                path:'/orderedFood',
                element:<PrivateRoute><AllOrder></AllOrder></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/purchase')  
            },
            {
                path:'/updateFood/:id',
                element:<UpdateAFood></UpdateAFood>,
                loader: ({params}) => fetch(`http://localhost:5000/allFood/${params.id}`)
            },

        ]
    },
])

export default myCreatedRoute;