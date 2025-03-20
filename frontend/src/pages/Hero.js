import React from 'react';

const productCategory = [
    { id: 1, label: "AirPods", value: "airpods" },
    { id: 2, label: "Cameras", value: "cameras" },
    { id: 3, label: "Earphones", value: "earphones" },
    { id: 4, label: "Smartphones", value: "smartphones" },
    { id: 5, label: "Wireless Mouse", value: "wireless-mouse" },
    { id: 6, label: "Printers & Scanners", value: "printers-scanners" },
    { id: 7, label: "Processors & CPUs", value: "processors" },
    { id: 8, label: "Refrigerators", value: "refrigerators" },
    { id: 9, label: "Smart Speakers", value: "smart-speakers" },
    { id: 10, label: "Trimmers & Grooming", value: "trimmers" },
    { id: 11, label: "4K Televisions", value: "televisions" },
    { id: 12, label: "Smartwatches", value: "smartwatches" },
    { id: 13, label: "Gaming Consoles", value: "gaming-consoles" },
    { id: 14, label: "Laptops & Accessories", value: "laptops" },
    { id: 15, label: "Home Appliances", value: "home-appliances" },
];

const Hero = () => {
    return (
        <div className="relative h-[50vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center px-6 md:px-12" style={{ backgroundImage: "url('/hamed-taha-YmBgW57IPtk-unsplash.jpeg')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-3xl px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
                    Shop Smarter
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fade-in-up text-gray-200">
                    Discover the latest trends in fashion, tech, and home essentials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transform transition-all hover:scale-105">
                        Shop Now
                    </button>
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full transform transition-all hover:scale-105">
                        Explore Deals
                    </button>
                </div>
            </div>
        </div>
    );
};

export { productCategory };
export default Hero;