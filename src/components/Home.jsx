import React, { lazy, Suspense } from "react";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import PricingTable from "./PricingTable.jsx";
import Footer from "./Footer.jsx";
import ContactUs from "./ContactUs.jsx";
import UserSearch from "./UserSearch.jsx";

// Lazy Load ServiceCards
const ServiceCards = lazy(() => import("./ServiceCards"));

export const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="my-20">
                <Navbar />
            </div>
            <HeroSection />

            {/*User Search Component */}
            <div className="py-10">
                <UserSearch />
            </div>

            {/*Lazy Loaded ServiceCards */}
            <Suspense fallback={<div className="text-center py-4">Loading services...</div>}>
                <ServiceCards />
            </Suspense>

            <PricingTable />
            <ContactUs />
            <Footer />
        </div>
    );
};
