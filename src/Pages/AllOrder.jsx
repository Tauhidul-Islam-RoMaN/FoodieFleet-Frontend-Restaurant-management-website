import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import MyOrderedFood from "./MyOrderedFood";



const AllOrder = () => {
    const allOrders = useLoaderData()
    const { user } = useAuth()
    console.log(allOrders);
    const myOrders = allOrders.filter(order => order.orderedBy === user?.email)
    console.log(myOrders);

    return (
        <div className=" bg-[#000B33]">
            <div className="max-w-7xl mx-4 lg:mx-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                    {
                        myOrders?.map(myOrder => <MyOrderedFood
                            key={myOrder._id} myOrder={myOrder}> </MyOrderedFood>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrder;