import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const MyToys = () => {
    const { user, loading } = useContext(AuthContext)
    const [myToysData, setMyToysData] = useState([])
    const [sortBy, setSortBy] = useState(-1)

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-ah-rifat.vercel.app/myToys/${user?.email}?&sortBy=${sortBy}`)
            .then(res => res.json())
            .then(result => {
                setMyToysData(result);
            })
    }, [user, sortBy])

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure to Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30856',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-ah-rifat.vercel.app/mytoys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success("Deleted Successfully")
                    })
            }
        })



    }



    return (
        <>
            <Helmet>
                <title>My Toys | Toy Marketplace</title>
            </Helmet>
            <p className="text-center mt-4 text-xl font-serif text-violet-600 underline">My Toy List</p>
            <div className="w-10/12 mx-auto my-10 shadow-violet-300 border border-violet-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="w-48 flex items-center ms-auto me-4 my-4">
                    <label className="block w-36 text-sm font-medium text-gray-900 dark:text-white">Sort By</label>
                    <select onChange={(e) => setSortBy(e.target.value)} className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'}>
                        <option value="-1">Descending</option>
                        <option value="1">Ascending</option>
                    </select>
                </div>
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
                                        <Link to={`/updateToyInfo/${_id}`} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Update</Link>
                                        <a onClick={() => handleDelete(_id)} className="text-red-700 cursor-pointer hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</a>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                {
                    loading ? <h1>Loading...</h1> : myToysData == '' && <h1 className="text-center text-red-500 text-xl font-bold my-6">No Data Found</h1>
                }
            </div>
        </>
    );
};

export default MyToys;