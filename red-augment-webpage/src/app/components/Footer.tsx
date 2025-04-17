'use client'
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-16 px-8 font-Montserrat relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
        {/* Column 1: Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.jpg"
              alt="Red Augment"
              className="h-8"
            />
            <span className="text-white font-medium text-xl">Red Augment</span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Eu eget sagittis mi odio.
            Eget non ultrices interdum nisi. A euismod nunc proin sed.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-medium">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: About */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-medium">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info and Copyright */}
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            <a
              href="mailto:contact@redaugment.com"
              className="text-white block"
            >
              contact@redaugment.com
            </a>
            <p className="text-sm text-gray-400">
              A - 2 Kadipur, Delhi
              <br />
              New Delhi, 110036, India
            </p>
          </div>
          <div className="mt-8 text-gray-400 text-sm">
            &copy; 2025 - redaugment
          </div>
        </div>
      </div>
      {/* Unfocused Golden Circle with reduced size and brightness */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-800 to-yellow-950 opacity-20 blur-2xl rounded-full w-[1100px] h-[200px] mx-auto"></div>
    </footer>
  );
}
