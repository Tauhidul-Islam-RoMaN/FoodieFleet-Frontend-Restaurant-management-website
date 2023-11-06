import PropTypes from 'prop-types';
import useAuth from '../Hook/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyOrderedFood = ({ myOrder }) => {
    const { foodName, image, quantity, price, orderedTime,category,email,name,description,orderedBy } = myOrder
    const { user } = useAuth()
    console.log(myOrder);
    const timeElapsed = Date.now();
    const purchasedTime = new Date(timeElapsed).toUTCString();
    const purchasedOrder = {name, email, foodName, image, category, quantity, origin, price, description, orderedBy,orderedTime ,purchasedTime }
    console.log(purchasedOrder);
    


    const handlePurchase = () => {
        fetch("http://localhost:5000/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchasedOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'This Food is Added to your purchased List!',
                        'success'
                    )
                    // window.location.reload()
                }
            });
    }


    return (
        <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full h-[350px]" src={image} alt="" />
            <h5 className="mb-2 px-5 pt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Food Name: {foodName} </h5>
            <div className="px-5 pt-5 flex flex-col md:flex-row ">
                <div className="flex-1">
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Amount: </span>{quantity} </p>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Price: $</span> {price}  </p>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Order Time:</span> {orderedTime}  </p>
                </div>
                <div className="flex-1">
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Added By: </span>{user?.displayName} </p>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>  Email: </span>{user?.email} </p>
                </div>
            </div>
            <Link > <button className='btn flex justify-center mb-5 w-3/4 mx-auto items-center btn-warning' onClick={handlePurchase} >Purchase</button> </Link>
        </div>

    );
};

MyOrderedFood.propTypes = {
    myOrder: PropTypes.object
};
export default MyOrderedFood;