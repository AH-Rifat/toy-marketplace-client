import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToysData, setMyToysData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMyToysData(result);
            })
    }, [user])

    return (
        <>
            <p className="text-center mt-4 text-xl font-serif text-violet-600 underline">My Toy List</p>
            <div className="w-10/12 mx-auto my-10 shadow-violet-300 border border-violet-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-violet-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Toy name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
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
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToysData.map(({ _id, toyName, description, subCategory, quantity, price, rating }) => {
                                return <tr key={_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {toyName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {description}
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
                                    <td className="px-6 py-4">
                                        {rating}
                                    </td>
                                    <td className="px-4 py-2 gap-2 flex items-center">
                                        <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Update</button>
                                        <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyToys;