import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UpdateToy = () => {
    const Navigate = useNavigate()
    const data = useLoaderData()
    const { _id, price, quantity, description } = data[0]

    const handleUpdateSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value
        const getData = { price, quantity, description }

        fetch(`http://localhost:5000/myToyUpdate/${_id}`, {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(getData)
        }).then(() => {
            Navigate('/myToys', { replace: true })
            toast.success("Successfully Updated")
        })
    }

    return (
        <div className="h-screen">
            <div className="w-1/3 mx-auto my-10 bg-white p-8">
                <h1 className="text-center text-2xl font-bold mb-4 text-violet-800 font-serif">Update Toy Info</h1>
                <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" name="price" defaultValue={price} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:shadow-sm-light" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Available Quantity</label>
                        <input type="number" name="quantity" defaultValue={quantity} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:shadow-sm-light" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea rows="4" name="description" defaultValue={description} className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'}></textarea>
                    </div>
                    <button type="submit" className="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Update </button>

                </form>
            </div>
        </div>
    );
};

export default UpdateToy;