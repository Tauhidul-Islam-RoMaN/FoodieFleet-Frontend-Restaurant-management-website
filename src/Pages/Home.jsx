import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <div>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;