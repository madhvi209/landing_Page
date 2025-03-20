import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center">Get In Touch</h2>
                <p className="text-lg text-gray-600 mt-4 text-center">
                    We’d love to hear from you! Send us a message and we’ll respond as soon as possible.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                <input type="email" placeholder="example@email.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                                <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea rows="5" placeholder="Your message here..." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                            <p className="ml-3 text-gray-700">123 Street, City, Country</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhone className="text-blue-600 text-2xl" />
                            <p className="ml-3 text-gray-700">+1 (123) 456-7890</p>
                        </div>
                        <div className="flex items-center mb-6">
                            <FaEnvelope className="text-blue-600 text-2xl" />
                            <p className="ml-3 text-gray-700">contact@example.com</p>
                        </div>

                        {/* Social Media Links */}
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaFacebook /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaTwitter /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
