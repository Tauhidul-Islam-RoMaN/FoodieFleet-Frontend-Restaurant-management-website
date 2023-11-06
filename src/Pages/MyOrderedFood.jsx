import PropTypes from 'prop-types';

const MyOrderedFood = ({ myOrder }) => {
    const { foodName, image, category, price, description } = myOrder
    console.log(myOrder);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[310px]" src={image} alt="" />
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Food Name: {foodName} </h5>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Food Category:</span>  {category} </p>
                    </div>
                    <div>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Price: $</span> {price}  </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Description: </span>{description} </p>
                    </div>
                    <button className='btn flex justify-center mb-5 w-3/4 mx-auto items-center btn-warning' >Delete Order</button>
                </div>
            </div>
        </div>
    );
};

MyOrderedFood.propTypes = {
    myOrder: PropTypes.object
};
export default MyOrderedFood;