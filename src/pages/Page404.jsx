import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="relative">
            <img src="https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7923.jpg?t=st=1684348782~exp=1684349382~hmac=1477f4407818814aec223aed258c33f99d649b04c1424667f7b4946ffa89af64"
                alt=""
                className="mx-auto h-screen w-full" />
            <Link to={"/"} className="font-bold">
                <button className="absolute top-8 left-[50%] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Back To Home
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default Page404;