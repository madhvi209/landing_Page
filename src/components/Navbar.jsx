import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button.jsx";
import { Menu, X, User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, logout } from "../redux/userSlice.js";
import axios from "axios";
import { USER_API_END_POINT } from "../components/utils/constant.js";
import { toast } from "react-toastify";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const logoutHandler = async () => {
        try {
            dispatch(setLoading(true));
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });

            if (res.data.success) {
                dispatch(logout());
                toast.success("Successfully logged out.");
                navigate("/");
            } else {
                toast.error("Logout failed. Please try again.");
            }
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("An error occurred while logging out.");
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 flex justify-between items-center z-50 md:px-12">
            <Link to="/" className="text-2xl font-extrabold text-gray-800">
                LANDING<span className="text-[#04668D]">PAGE</span>
            </Link>

            <ul className="hidden md:flex space-x-5 text-gray-800 font-medium">
                <li><Link to="/services" className="text-[#04668D] hover:text-[#1c353f]] transition">SERVICES</Link></li>
                <li><Link to="/pricing" className="text-[#04668D] hover:text-[#1c353f]] transition">PRICING</Link></li>
                <li><Link to="/contactUs" className="text-[#04668D] hover:text-[#1c353f]] transition">CONTACT US</Link></li>
            </ul>

            <div className="hidden md:flex space-x-4 items-center">
                {user ? (
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className="flex items-center space-x-2">
                            <User size={20} className="text-gray-800" />
                            <span>{user.name}</span>
                        </Link>
                        <Button variant="outline" onClick={logoutHandler} className="border-gray-300">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <>
                            <Button variant="outline" asChild className="border-gray-300 hover:bg-[#1c353f]">
                            <Link to="/login">LOGIN</Link>
                        </Button>
                            <Button asChild className="bg-[#04668D] text-white hover:bg-[#1c353f]">
                            <Link to="/signup">SIGNUP</Link>
                        </Button>
                    </>
                )}
            </div>

            <button className="md:hidden text-gray-800 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
                    <ul className="flex flex-col items-center space-y-4 p-6">
                        <li><Link to="/students" className="block text-gray-800 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>For Students</Link></li>
                        <li><Link to="/donors" className="block text-gray-800 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>For Donors</Link></li>
                        <li><Link to="/company" className="block text-gray-800 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Company</Link></li>
                        {user ? (
                            <>
                                <li>
                                    <Link to="/profile" className="block w-full text-center text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300" onClick={() => setMenuOpen(false)}>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={logoutHandler} className="block w-full text-center text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className="block w-full text-center text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300" onClick={() => setMenuOpen(false)}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                        <Link to="/signup" className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-[#1c353f] transition duration-300" onClick={() => setMenuOpen(false)}>
                                        Join Now
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
