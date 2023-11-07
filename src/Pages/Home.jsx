import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TopFood from "./TopFood";

const Home = () => {
    const allFoods = useLoaderData()
    console.log(allFoods);
    const sortedFood = [...allFoods].sort((a, b) => b.quantity - a.quantity);
    console.log(sortedFood);
    const slicedFood = sortedFood.slice(0,6)
    console.log(slicedFood);

    return (
        <div>
            <Banner></Banner>
            <div className=" bg-[#000B33]">
                <div className="max-w-7xl mx-4 pb-10 lg:mx-24">
                    <h2 className="text-3xl font-bold text-center text-white py-20">Top Selling Food</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 pb-10 lg:grid-cols-3 gap-10 ">
                        {
                            slicedFood?.map(allFood => <TopFood
                                key={allFood._id} allFood={allFood}> </TopFood>)
                        }
                    </div>
                    <Link to='allFood' ><button className="btn w-full max-w-md flex justify-center mx-auto btn-warning">See All</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Home;