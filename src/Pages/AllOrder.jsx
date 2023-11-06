import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import MyOrderedFood from "./MyOrderedFood";



const AllOrder = () => {
    const allOrders = useLoaderData()
    const {user} = useAuth()
    console.log(allOrders);
    const myOrders = allOrders.filter(order => order.orderedBy === user?.email )
    console.log(myOrders);

    return (
        <div>
              {
                myOrders?.map(myOrder => <MyOrderedFood 
                    key={myOrder._id} myOrder={myOrder}> </MyOrderedFood>)
              }
        </div>
    );
};

export default AllOrder;