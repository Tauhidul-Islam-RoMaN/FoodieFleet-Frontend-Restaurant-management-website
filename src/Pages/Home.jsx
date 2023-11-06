import { useLoaderData } from "react-router-dom";

const Home = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <div>
            
        </div>
    );
};

export default Home;