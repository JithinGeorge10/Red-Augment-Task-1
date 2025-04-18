'use client'
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-12 px-4 md:py-16 md:px-8 font-Montserrat relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Logo and Description */}
        <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
                <img
                    src="/logo.jpg"
                    alt="Red Augment"
                    className="h-8 mb-2 md:mb-0"
                />
                <span className="text-white font-medium text-lg md:text-xl">Red Augment</span>
            </div>
            <p className="text-sm text-gray-400 md:pr-4">
                Lorem ipsum dolor sit amet consectetur. Eu eget sagittis mi odio.
                Eget non ultrices interdum nisi. A euismod nunc proin sed.
            </p>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-4 text-center md:text-left">
            <h3 className="text-white text-base md:text-lg font-medium">Services</h3>
            <ul className="space-y-3 md:space-y-2">
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm block">
                        Pricing
                    </a>
                </li>
            </ul>
        </div>

        {/* Column 3: About */}
        <div className="space-y-4 text-center md:text-left">
            <h3 className="text-white text-base md:text-lg font-medium">About</h3>
            <ul className="space-y-3 md:space-y-2">
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm block">
                        Blogs
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm block">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white text-sm block">
                        Privacy Policy
                    </a>
                </li>
            </ul>
        </div>

        {/* Column 4: Contact Info and Copyright */}
        <div className="flex flex-col justify-between h-full text-center md:text-left">
            <div className="space-y-4">
                <a
                    href="mailto:contact@redaugment.com"
                    className="text-white block text-sm md:text-base"
                >
                    contact@redaugment.com
                </a>
                <p className="text-sm text-gray-400">
                    A - 2 Kadipur, Delhi<br />
                    New Delhi, 110036, India
                </p>
            </div>
            <div className="mt-12 md:mt-8 text-gray-400 text-sm text-center md:text-left">
                &copy; 2025 - redaugment
            </div>
        </div>
    </div>

    {/* Responsive Background Element */}
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-800 to-yellow-950 opacity-20 blur-2xl rounded-full w-full md:w-[1100px] h-[100px] md:h-[200px] mx-auto left-0 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2"></div>
</footer>
  );
}
