import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { setLoading, setUser } from "../redux/userSlice.js";
import { USER_API_END_POINT } from "../components/utils/constant.js";
import Navbar from "./Navbar.jsx";

const SignupPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.password) {
            toast.error("All fields are required!");
            return;
        }

        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            toast.error("Phone number must be exactly 10 digits.");
            return;
        }

        try {
            dispatch(setLoading(true));

            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Signup failed. Please try again.");
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div>
                <Navbar />
            </div>
            <ToastContainer />
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c353f]]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c353f]]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c353f]]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c353f]]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#04668D] text-white py-3 rounded-lg font-semibold hover:bg-[#1c353f]] transition"
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#04668D] font-semibold hover:underline">
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
