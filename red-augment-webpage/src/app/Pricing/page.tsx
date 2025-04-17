'use client'
import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Pricing = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen py-16 px-4">
        <div className="flex flex-col items-center text-center space-y-6 mb-12 max-w-2xl mx-auto">
          <button className="px-8 py-2 bg-gray-800 text-white text-xs font-light rounded-2xl hover:bg-black/[0.8] hover:shadow-lg font-Montserrat">
            Bring your business to the best scale
          </button>

          <h1 className="text-6xl font-light text-white font-Montserrat">
            Discover Services With the Best Pricing
          </h1>
          <h4 className="text-gray-300 font-light font-Montserrat">
            Select from best plan, ensuring a perfect match. Need more or
            <br />
            less? Customize your subscription for a seamless fit!
          </h4>
        </div>

        <Card />

      </div>
      <Footer></Footer>
    </>

  );
};

export default Pricing;