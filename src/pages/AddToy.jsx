import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => {
            return toast.success("Toy Inserted Successfully")
        }).catch(error => {
            return toast.error(error)
        })
    };


    return (
        <div className="w-96 mx-auto rounded-xl shadow-xl border border-violet-300 shadow-violet-300 bg-white p-4 my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("sellerName")} defaultValue={user?.displayName} />
                <input type="hidden" {...register("sellerEmail")} defaultValue={user?.email} />
                <div className="grid">
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input type="text" {...register("imageUrl", { required: true })} className={errors.imageUrl ? 'border border-red-300 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'} />
                        <p className="mt-1 text-red-500 font-semibold">{errors.imageUrl ? 'Image URL is required' : ''}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Name</label>
                        <input type="text" {...register("toyName", { required: true })} className={errors.toyName ? 'border border-red-300 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'} />
                        <p className="mt-1 text-red-500 font-semibold">{errors.toyName ? 'Toy Name is required' : ''}</p>
                    </div>
                    <div className="mb-6 flex items-center gap-4">
                        <div className="w-52">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Sub-category</label>
                            <select {...register("subCategory", { required: true })} className={errors.subCategory ? 'border border-red-300 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'}>
                                <option value={''}>Choose a Category</option>
                                <option value="sports car">Sports Car</option>
                                <option value="mini fire truck">Mini Fire Truck</option>
                                <option value="police car">Police Car</option>
                                <option value="truck">Truck</option>
                            </select>
                            <p className="mt-1 text-red-500 font-semibold">{errors.subCategory ? 'Sub-Category is required' : ''}</p>
                        </div>
                        <div className="w-32">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input type="number" {...register("quantity", { required: true })} className={errors.quantity ? 'border border-red-300 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'} />
                            <p className="mt-1 text-red-500 font-semibold">{errors.quantity ? 'Quantity is required' : ''}</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea {...register("description", { required: true })} rows="4" className={errors.description ? 'border border-red-300 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'}></textarea>
                        <p className="mt-1 text-red-500 font-semibold">{errors.description ? 'Description is required' : ''}</p>
                    </div>
                    <div className="mb-6 flex gap-4 items-center">
                        <div className="w-1/2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Price</label>
                            <input type="number" {...register("price", { required: true })} className={errors.price ? 'border border-red-300 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'} />
                            <p className="mt-1 text-red-500 font-semibold">{errors.price ? 'Price is required' : ''}</p>
                        </div>
                        <div className="w-1/2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Rating</label>
                            <input type="number" {...register("rating", { required: true })} className={errors.rating ? 'border border-red-300 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'} />
                            <p className="mt-1 text-red-500 font-semibold">{errors.rating ? 'Rating is required' : ''}</p>
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Add A Toy</button>
            </form>
        </div>
    );
};

export default AddToy;