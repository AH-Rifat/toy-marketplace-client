import { NavLink } from "react-router-dom";
import avatarImg from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const HeaderNav = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogout = () => {
        return logOut()
    }
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?w=740&t=st=1684346195~exp=1684346795~hmac=daa99b3358004064bc59b3f4127515105676c901179e2c36694ae8b075bc1601" className="h-8 mr-3" alt="Logo" />
                        <span className="text-red-500 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AH Toys Hub</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to={"/"} className="block py-2 pl-3 pr-4 font-serif font-bold text-white bg-violet-700 rounded md:bg-transparent md:text-violet-500 hover:text-violet-800 md:p-0 dark:text-white md:dark:text-violet-500">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/allToys"} className="block py-2 pl-3 pr-4 font-serif font-bold text-white bg-violet-700 rounded md:bg-transparent md:text-violet-500 hover:text-violet-800 md:p-0 dark:text-white md:dark:text-violet-500">All Toys</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 pl-3 pr-4 font-serif font-bold text-white bg-violet-700 rounded md:bg-transparent md:text-violet-500 hover:text-violet-800 md:p-0 dark:text-white md:dark:text-violet-500">Blogs</NavLink>
                            </li>
                            {
                                user && <>
                                    <li>
                                        <NavLink to={"/myToys"} className="block py-2 pl-3 pr-4 font-serif font-bold text-white bg-violet-700 rounded md:bg-transparent md:text-violet-500 hover:text-violet-800 md:p-0 dark:text-white md:dark:text-violet-500">My Toys</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/addToy"} className="block py-2 pl-3 pr-4 font-serif font-bold text-white bg-violet-700 rounded md:bg-transparent md:text-violet-500 hover:text-violet-800 md:p-0 dark:text-white md:dark:text-violet-500">Add A Toy</NavLink>
                                    </li>
                                    <li>
                                        <div
                                            className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                            data-te-toggle="tooltip"
                                            title={user?.displayName}
                                        >
                                            <img className="w-10 h-10 rounded-full" src={user ? user?.photoURL : avatarImg} alt="avatar" />
                                        </div>
                                    </li>
                                </>
                            }
                            <li className="bg-purple-500 hover:bg-purple-700 p-2 rounded-lg">
                                {
                                    user ? <button onClick={handleLogout} className="block py-2 pl-3 pr-4 font-serif font-bold text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-violet-500">Logout</button>
                                        : <NavLink to={"/login"} className="block py-2 pl-3 pr-4 font-serif font-bold text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-violet-500">Login</NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderNav;