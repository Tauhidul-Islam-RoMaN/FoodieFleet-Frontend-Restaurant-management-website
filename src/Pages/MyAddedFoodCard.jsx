import PropTypes from 'prop-types';

const MyAddedFoodCard = ({myAddedFood}) => {
    const { foodName, image, price, category, quantity } = myAddedFood
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-[310px]" src={image} alt="" />
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Food Name: {foodName} </h5>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Food Category:</span>  {category} </p>
                </div>
                <div>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Price: $</span> {price}  </p>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Amount: </span>{quantity} </p>
                </div>
            </div>
        </div>

    );
};

MyAddedFoodCard.propTypes = {
    myAddedFood: PropTypes.object
};

export default MyAddedFoodCard;