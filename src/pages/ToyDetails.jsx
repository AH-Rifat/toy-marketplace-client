import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const ToyDetails = () => {
    const data = useLoaderData()
    const { imageUrl, toyName, sellerName, sellerEmail, price, rating, quantity, description } = data[0]

    return (
        <>
            <Helmet>
                <title>Toy Details | Toy Marketplace</title>
            </Helmet>
            <div className="max-w-lg mx-auto my-8 shadow-violet-500 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={imageUrl} alt="image" />
                </a>
                <div className="p-5 leading-10 border-t-2">
                    <tr className="flex gap-6">
                        <td className="font-bold">Toy Name:</td>
                        <td className="text-violet-600 font-semibold">{toyName}</td>
                    </tr>
                    <div className="flex gap-6">
                        <label className="font-bold">Seller Name:</label>
                        <p className="text-violet-600 font-semibold">{sellerName}</p>
                    </div>
                    <div className="flex gap-6">
                        <label className="font-bold">Seller Email:</label>
                        <p className="text-violet-600 font-semibold">{sellerEmail}</p>
                    </div>
                    <div className="flex gap-6">
                        <label className="font-bold">Price:</label>
                        <p className="text-violet-600 font-semibold">{price}</p>
                    </div>
                    <div className="flex gap-6">
                        <label className="font-bold">Rating:</label>
                        <p className="text-violet-600 font-semibold">{rating}</p>
                    </div>
                    <div className="flex gap-6">
                        <label className="font-bold">Available Quantity:</label>
                        <p className="text-violet-600 font-semibold">{quantity}</p>
                    </div>
                    <div className="flex gap-6">
                        <label className="font-bold">Description:</label>
                        <p className="text-violet-600 font-semibold">{description}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ToyDetails;