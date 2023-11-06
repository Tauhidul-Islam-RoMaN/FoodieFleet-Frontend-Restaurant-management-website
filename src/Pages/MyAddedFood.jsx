import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import MyAddedFoodCard from "./MyAddedFoodCard";

const MyAddedFood = () => {

    const addedFoods = useLoaderData()
    const {user} = useAuth()
    console.log(addedFoods);

    const myAddedFoods = addedFoods.filter(items => items.email === user?.email)
    console.log(myAddedFoods);

    return (
            <div className=" bg-[#000B33]">
                <div className="max-w-7xl mx-4 lg:mx-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                        {
                            myAddedFoods?.map(myAddedFood => <MyAddedFoodCard
                                key={myAddedFood._id} myAddedFood={myAddedFood}> </MyAddedFoodCard>)
                        }
                    </div>
                </div>
            </div>
        );
};

export default MyAddedFood;