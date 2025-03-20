import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const mediaSources = [
        { type: "image", src: "https://image.slidesdocs.com/responsive-images/background/sky-gradient-light-effect-nature-spring-powerpoint-background_ce05d64a06__960_540.jpg" },
        { type: "image", src: "https://wallpapers.com/images/hd/colors-background-xwvt9jtj09hdoe53.jpg" },
        { type: "image", src: "https://tse2.mm.bing.net/th?id=OIP._WNdI2HnRSIAd--z0zgZHQHaEo&pid=Api&P=0&h=220" },
        { type: "image", src: "https://static.vecteezy.com/system/resources/previews/019/821/543/large_2x/colorful-rainbow-holi-paint-color-powder-explosion-isolated-white-wide-panorama-background-3d-and-illustrations-photo.jpg" },
        { type: "image", src: "https://cdn.create.vista.com/api/media/small/9245159/stock-photo-abstract-colored-background" },
        { type: "video", src: "https://www.youtube.com/embed/XDpnEMNyX6Q?autoplay=1&mute=1&loop=1" }
    ];

    const [currentMedia, setCurrentMedia] = useState(0);
    const user = useSelector((state) => state.user?.user);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMedia((prev) => (prev + 1) % mediaSources.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <header className="text-white py-16 text-center bg-cover bg-center transition-all duration-1000 h-[600px] w-full">
                {mediaSources[currentMedia].type === "image" ? (
                    <div
                        style={{ backgroundImage: `url(${mediaSources[currentMedia].src})` }}
                        className="h-full w-full bg-cover bg-center absolute top-0 left-0"
                    ></div>
                ) : (
                    <iframe
                        className="h-full w-full absolute top-0 left-0"
                        src={mediaSources[currentMedia].src}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                )}
                <div className="relative py-16 px-4 rounded-lg z-10">
                    <h1 className="text-4xl font-bold text-[#123e4f]">
                        Welcome {user?.fullName ? user.fullName : "Guest"}! to Our Platform
                    </h1>
                    <p className="mt-4 text-3xl text-[#123e4f]">
                        Best services at affordable prices
                    </p>
                    <a
                        href="/signup"
                        className="mt-6 inline-block bg-white text-[#04668D] font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
                    >
                        FIND YOUR STYLE
                    </a>
                    <div className="search-bar mt-8 flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => navigate("/pricing")}
                            className="search-btn bg-[#04668D] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1c353f] transition duration-200"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeroSection;
