import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {
    const [allToysData, setAllToysData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(result => {
                setAllToysData(result);
            })
    }, [allToysData])

    return (
        <>
            <p className="text-center mt-4 text-xl font-serif text-violet-600 underline">All Toys</p>
            <div className="w-10/12 mx-auto my-10 shadow-violet-300 border border-violet-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-violet-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Toy name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seller Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cetagory
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToysData.map(({ _id, toyName, sellerName, subCategory, quantity, price }) => {
                                return <tr key={_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {toyName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {sellerName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {subCategory}
                                    </td>
                                    <td className="px-6 py-4">
                                        {quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {price}
                                    </td>
                                    <td className="px-4 py-2 gap-2 flex items-center">
                                        <Link to={`/toyDetails/${_id}`} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">View Details</Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                {
                    allToysData == '' ? <h1 className="text-center text-red-500 text-xl font-bold my-6">No Data Found</h1> : ''
                }
            </div>
        </>
    );
};

export default AllToys;