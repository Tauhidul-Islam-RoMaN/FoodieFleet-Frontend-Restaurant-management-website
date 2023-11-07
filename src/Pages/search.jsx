import React, { useState, useEffect } from "react";

const Search = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

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

    return (
        <div>
            <input
                type="text"
                placeholder="Search by food name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
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
    );
};

export default Search;
import React, { useEffect, useState } from "react";
import Search from "./Search";

function App() {
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        // Load your food data from the MongoDB backend
        // Replace this with your actual API endpoint
        fetch("/api/foods")
            .then((response) => response.json())
            .then((data) => setFoodData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Restaurant Website</h1>
            <Search data={foodData} />
            {/* Other components and content here */}
        </div>
    );
}

export default App;
