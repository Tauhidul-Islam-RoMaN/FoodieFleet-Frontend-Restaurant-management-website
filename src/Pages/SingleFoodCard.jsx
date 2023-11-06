import { Link, useLoaderData } from "react-router-dom";

const SingleFoodCard = () => {
    const singleFood = useLoaderData()
    const { name, email, foodName, image, category, quantity, origin, price, description } = singleFood
    console.log(singleFood);
    return (
        <div className="bg-[#000B33] py-10">
            <div className="max-w-3xl lg:mx-auto md:mx-6 mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg mx-auto " src={image} alt="" />
                <h5 className="mb-2 px-5 pt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Food Name: {foodName} </h5>

                <div className="px-5 pt-5 flex flex-col md:flex-row ">
                    <div className="flex-1">
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Food Category:</span>  {category} </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Price: $</span> {price}  </p>

                    </div>
                    <div className="flex-1">
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Origin: </span>{origin} </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Amount: </span>{quantity} </p>
                    </div>
                    <div className="flex-1">
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Added By: </span>{name} </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>  Email: </span>{email} </p>
                    </div>
                </div>
                <p className="mb-3 px-5 -pt-5 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Description: </span>{description} </p>
                <Link > <button className='btn flex justify-center mb-5 w-3/4 mx-auto items-center btn-warning' >Order Now</button> </Link>

            </div>
        </div>
    );
};

export default SingleFoodCard;