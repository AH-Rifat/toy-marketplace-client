import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const ToyCard = (data) => {
    const { _id, imageUrl, toyName, price, rating, } = data.cars

    return (
        <div className="w-full mt-4 max-w-sm shadow-xl shadow-indigo-300 bg-violet-400 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img className="w-72 md:w-[23rem] mx-auto my-2 rounded-lg border" src={imageUrl} alt="product image" />

            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{toyName}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating
                        style={{ maxWidth: 150 }}
                        readOnly
                        orientation="horizontal"
                        value={rating}
                    />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <Link to={`toyDetails/${_id}`} className="text-white bg-indigo-700 hover:bg--800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;