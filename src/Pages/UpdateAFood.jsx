import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { useState } from "react";

const UpdateAFood = () => {


    // const countries =[{"origin": "Italy"}, {"origin": "France"}, {"origin": "India"}, {"origin": "China"}, {"origin": "Japan"}, {"origin": "Mexico"}, {"origin": "Thailand"}, {"origin": "Greece"}, {"origin": "Spain"}, {"origin": "Turkey"}, {"origin": "Vietnam"}, {"origin": "Morocco"}, {"origin": "Lebanon"}, {"origin": "South Korea"}, {"origin": "Argentina"}, {"origin": "Peru"}, {"origin": "Brazil"}, {"origin": "Palestine"}, {"origin": "Iran"}, {"origin": "Malaysia"}, {"origin": "Ethiopia"}, {"origin": "Egypt"}, {"origin": "Indonesia"}, {"origin": "Russia"}, {"origin": "Portugal"}, {"origin": "Tunisia"}, {"origin": "Bangladesh"}]
    // console.log(countries);

    const { user } = useAuth()
    const [category, setCategory] = useState()
    // const [country, setCountry] = useState()

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    // const handleOrigin = (e) => {
    //     setCountry(e.target.value)
    // }

    const handleUpdateFood = (e) => {
        e.preventDefault()

        const form = e.target
        const email = user?.email
        const name = user?.displayName
        const foodName = form.foodName.value
        const image = form.image.value
        const category1 = category
        const quantity = form.quantity.value
        const origin = form.origin.value
        // const origin = country
        const price = form.price.value
        const description = form.description.value

        const newFood = (email, name, foodName, image, category1, quantity, origin, price, description);
        console.log(newFood);



        Swal.fire(
            'Good job!',
            'You Food is Updated!',
            'success'
        )
        form.reset()
        setCategory('')
        // setCountry('')
    }
    return (
        <div className="bg-[#000B33] py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-black text-center pt-4 pb-1 font-semibold">Update Food</h2>
                    <form onSubmit={handleUpdateFood} className="card-body bg-white rounded-lg">
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Name</span>
                                </label>
                                <input type="text" name="foodName" placeholder="Food Name" defaultValue={foodName} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Food Image" defaultValue={image} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                {/* <label className="label">
                                    <span className="label-text text-black font-medium">Food Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Food Category" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required /> */}
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Category</span>
                                </label>
                                <select name="" value={category} onChange={handleCategory} defaultValue={value} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none">
                                    <option value="">Select An Option</option>
                                    <option value="Thai">Thai</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Chinese">Chinese</option>
                                </select>
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Quantity" defaultValue={quantity} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Origin(Country)</span>
                                </label>
                                <input type="text" name="origin" placeholder="Food Origin" defaultValue={origin} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                {/* <select name="" value={country} onChange={handleOrigin} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none">
                                    <option value="">Select Country</option>
                                    {countries.map(country,index => <option key={index}> </option>)}
            
                                </select> */}
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" defaultValue={price} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Added By(Name)</span>
                                </label>
                                <input type="text" name="name" placeholder="Added By(Name)" defaultValue={user?.displayName} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Added By(Email)</span>
                                </label>
                                <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Description</span>
                                </label>
                                {/* <input type="text" name="description" placeholder="description" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required /> */}
                                <textarea name="description" defaultValue={description} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" cols="30" rows="2" placeholder="Short description" required></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Update Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAFood;