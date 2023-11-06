import { useLoaderData } from "react-router-dom";

const PurchasedFood = () => {
    const purchasedFood = useLoaderData()
    console.log(purchasedFood);
    return (
        <div>
            
        </div>
    );
};

export default PurchasedFood;