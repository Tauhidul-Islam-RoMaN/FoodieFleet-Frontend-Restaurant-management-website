import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllFood = () => {
    const allFoods = useLoaderData()
    console.log(allFoods);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchResults);

    useEffect(() => {
        if (searchQuery) {

            fetch(`http://localhost:5000/allFood?foodName=${searchQuery}`)
                .then((response) => response.json())
                .then((data) => setSearchResults(data))
                .catch((error) => console.error(error));
        } else {
            setSearchResults([]); // Reset search results when the query is empty
        }
    }, [searchQuery]);

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     const search = e.target.search.value
    //     console.log(search);
    // }

    return (
        <div className="bg-[#000B33]">
            <Helmet>
                <title>
                    FoodieFleet | AllFood
                </title>
            </Helmet>
            <div className=" max-w-7xl mx-4 md:mx-10">
                <div className="flex items-center gap-2 pt-10 justify-end">
                    <div className="form-control">
                        <input type="text"
                            name="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search By Food Name"
                            className="input input-bordered max-w-md" />
                    </div>
                    {/* <div className="form-control">
                        <button className="btn btn-warning">Search</button>
                    </div> */}
                </div>
                <div>
                    {searchResults.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                            {
                                searchResults.map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
                            }
                        </div>

                    ) : searchQuery ? (
                        <p className="text-center flex justify-center items-center text-3xl">No data found</p>
                    ) :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                            {
                                allFoods.map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFood;