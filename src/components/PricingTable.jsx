import React from "react";

const pricing = [
    {
        title: "Basic Plan",
        price: "$9.99/mo",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        bgImage: "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg"
    },
    {
        title: "Pro Plan",
        price: "$19.99/mo",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        bgImage: "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg"
    },
    {
        title: "Enterprise Plan",
        price: "$49.99/mo",
        features: ["All Features", "Premium Support", "Custom Solutions"],
        bgImage: "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg"
    }
];

const PricingSection = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">Our Plans</h2>
                <p className="text-lg text-gray-600 mt-4">Choose the plan that fits your needs.</p>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {pricing.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition relative overflow-hidden"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-30"
                                style={{ backgroundImage: `url(${service.bgImage})` }}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                <p className="text-xl text-gray-600 mt-2">{service.price}</p>
                                <ul className="mt-4 text-gray-700">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="mt-1">✔ {feature}</li>
                                    ))}
                                </ul>
                                <button className="mt-6 bg-[#04668D] text-white px-6 py-2 rounded-lg hover:bg-[#1c353f]">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
