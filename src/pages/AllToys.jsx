import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const AllToys = () => {
    const [allToysData, setAllToysData] = useState([])
    const [selectLimit, setSelectLimit] = useState(20)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/allToys?search=${search}&limit=${selectLimit}`)
            .then(res => res.json())
            .then(result => {
                setAllToysData(result);
            })
    }, [selectLimit, search])

    return (
        <>
            <Helmet>
                <title>All Toys | Toy Marketplace</title>
            </Helmet>
            <p className="text-center mt-4 text-xl font-serif text-violet-600 underline">All Toys</p>

            <div className="w-[83%] ms-28  flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <label className="block w-56 mb-2 text-md font-medium text-gray-900 dark:text-white">Limit Per Page</label>
                    <select onChange={(e) => setSelectLimit(e.target.value)} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option value={2}>2</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search on Toy Name" />
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto mb-10 shadow-violet-300 border border-violet-300 relative overflow-x-auto shadow-md sm:rounded-lg">
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