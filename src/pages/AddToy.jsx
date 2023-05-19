import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="w-96 mx-auto rounded-xl shadow-xl border border-violet-300 shadow-violet-300 bg-white p-4 my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("sellerName")} defaultValue={"kamal"} />
                <input type="hidden" {...register("sellerEmail")} defaultValue={"kamal@gmail.com"} />
                <div className="grid">
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input type="text" {...register("imageUrl")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Name</label>
                        <input type="text" {...register("toyName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" />
                    </div>
                    <div className="mb-6 flex items-center gap-4">
                        <div className="w-52">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Sub-category</label>
                            <select {...register("subCategory")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
                                <option >Choose a Category</option>
                                <option value="sports car">Sports Car</option>
                                <option value="mini fire truck">Mini Fire Truck</option>
                                <option value="police car">Police Car</option>
                                <option value="truck">Truck</option>
                            </select>
                        </div>
                        <div className="w-32">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input type="number" {...register("quantity")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea {...register("description")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"></textarea>
                    </div>
                    <div className="mb-6 flex gap-4 items-center">
                        <div className="w-1/2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Price</label>
                            <input type="number" {...register("price")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" />
                        </div>
                        <div className="w-1/2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Rating</label>
                            <input type="number" {...register("rating")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Add A Toy</button>
            </form>
        </div>
    );
};

export default AddToy;