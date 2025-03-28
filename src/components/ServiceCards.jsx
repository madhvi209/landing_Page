import React from "react";
import { FaLaptopCode, FaPalette, FaMobileAlt, FaBullhorn, FaGlobe } from "react-icons/fa";
import Navbar from "./Navbar";

const services = [
  { title: "Web Development", icon: <FaLaptopCode />, description: "Customized, responsive, and scalable web solutions.", bgImage: "url('https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg')" },
  { title: "UI/UX Design", icon: <FaPalette />, description: "Modern and user-friendly interface design.", bgImage: "url('https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg')" },
  { title: "App Development", icon: <FaMobileAlt />, description: "Robust and scalable mobile applications.", bgImage: "url('https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg')" },
  { title: "Digital Marketing", icon: <FaBullhorn />, description: "SEO, social media, and content marketing strategies.", bgImage: "url('https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg')" },
  { title: "Brand Strategy", icon: <FaGlobe />, description: "Creative and strategic brand growth solutions.", bgImage: "url('https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?cs=srgb&dl=background-blur-bright-220067.jpg&fm=jpg')" }
];

const ServiceCards = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Navbar/>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4">We offer premium solutions tailored to your needs.</p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center p-6"
              style={{ backgroundImage: service.bgImage }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
                <button className="mt-4 px-4 py-2 bg-[#04668D] text-white rounded-lg hover:bg-[#1c353f] transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
