import { useLoaderData } from "react-router-dom";
import PurchasedFood from "./PurchasedFood";

const PurchasedRoodGrid = () => {
    const purchasedFoods = useLoaderData()
    console.log(purchasedFoods);
    return (
        <div className="bg-[#000B33]">
            <div className=" max-w-7xl mx-4 md:mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                    {
                        purchasedFoods.map(purchasedFood => <PurchasedFood key={purchasedFood._id} purchasedFood={purchasedFood}></PurchasedFood>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PurchasedRoodGrid;