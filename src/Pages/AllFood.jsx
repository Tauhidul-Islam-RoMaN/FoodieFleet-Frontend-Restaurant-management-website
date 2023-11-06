import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";

const AllFood = () => {
    const allFoods = useLoaderData()
    console.log(allFoods);
    return (
        <div className="bg-[#000B33]">
            <div className=" max-w-7xl mx-4 md:mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                    {
                        allFoods.map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFood;