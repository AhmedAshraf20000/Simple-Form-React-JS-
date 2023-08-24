import { useContext } from "react";
import AuthControl from "./Store/auth-control";

const NavBar = () => {
    const ctx = useContext(AuthControl);
    return (
        <header className=" bg-purple-700 py-6 flex md:justify-between px-6 md:flex-nowrap md:space-y-0 flex-wrap space-y-3 justify-center">
            <div className="container mx-auto">
                <h1 className="capitalize text-white text-3xl font-bold text-center md:text-left">Simple form</h1>
            </div>
            {
                ctx.isLoggedIn &&
                <ul className="flex gap-6 items-center text-white cursor-pointer">
                    <li>Users</li>
                    <li>Admin</li>
                    <button onClick={ctx.logOutHandler} className="block capitalize text-white bg-purple-900 rounded-xl  px-8 py-2 mx-auto border border-purple-900 hover:text-purple-900 hover:bg-white">logout</button>
                </ul>
            }
        </header>
    );
};

export default NavBar;