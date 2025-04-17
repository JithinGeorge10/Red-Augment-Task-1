'use client'
import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Pricing = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative bg-neutral-950 min-h-screen py-16 px-4 overflow-hidden">

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-300px] left-[-300px] w-[250%] h-[200%] rotate-[25deg] flex gap-6">
            {Array.from({ length: 30 }).map((_, i) => {
              const widths = [40, 70, 90, 60, 100];
              const width = widths[i % widths.length];

              return (
                <div
                  key={i}
                  className="h-full rounded-xl"
                  style={{
                    width: `${width}px`,
                    background: `linear-gradient(to bottom, rgba(91, 119, 255, 0.18), rgba(91, 119, 255, 0))`,
                    boxShadow: `0 0 60px 20px rgba(91, 119, 255, 0.08)`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>



        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-12 max-w-2xl mx-auto">
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