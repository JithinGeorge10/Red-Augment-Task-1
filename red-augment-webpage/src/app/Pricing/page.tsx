'use client'
import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const mobilePricingData = [
  {
    title: "Basic Plan",
    price: "$19/mo",
    features: ["1 User", "Basic Support", "Limited Access"],
  },
  {
    title: "Pro Plan",
    price: "$49/mo",
    features: ["5 Users", "Priority Support", "Full Access"],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Unlimited Users", "Dedicated Manager", "Custom Features"],
  },
];

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-neutral-950 min-h-screen py-10 md:py-16 px-4 overflow-hidden">

        {/* Background only for desktop */}
        <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-300px] left-[-300px] w-[250%] h-[200%] rotate-[25deg] flex gap-4 md:gap-6">
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
                />
              );
            })}
          </div>
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 mb-10 max-w-2xl mx-auto">
          <button className="px-6 md:px-8 py-2 bg-gray-800 text-white text-xs font-light rounded-2xl hover:bg-black/[0.8] hover:shadow-lg font-Montserrat hidden md:inline">
            Bring your business to the best scale
          </button>
          <h1 className="text-3xl md:text-6xl font-light text-white font-Montserrat">
            Discover Services
          </h1>
          <h4 className="text-sm md:text-base text-gray-300 font-light font-Montserrat hidden md:block">
            Select from best plan, ensuring a perfect match.
            <br />
            Need more or less? Customize your subscription for a seamless fit!
          </h4>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative z-10">
          <Card />
        </div>

        {/* Mobile Pricing List */}
        <div className="block md:hidden relative z-10 space-y-6">
          {mobilePricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold mb-3">{plan.price}</p>
              <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
