import React from "react";
import Searchbar from "../components/SearchBar";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Services = () => {
    const services = [
        "Artificial Intelligence & Advanced Data Solutions",
        "Custom Software Development, Cloud & DevOps Engineering",
        "Product Innovation, Design & Digital Experiences",
        "Branding, Marketing & Content Strategy",
        "Strategic Consulting & Digital Transformation",
    ];

    const servicesCard = [
        {
            title: "AI Strategy & Advisory",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            gradient: "from-purple-900/80 to-gray-900",
            image: "/api/placeholder/600/600",
            position: "left-8 bottom-8",
        },
        {
            title: "Generative AI & Large Language Models (LLMs)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            gradient: "from-purple-600 to-purple-800",
            image: "/api/placeholder/600/600",
            position: "right-8 bottom-8",
        },
        {
            title: "Computer Vision & Image Analysis ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            gradient: "from-indigo-600 to-purple-700",
            image: "/api/placeholder/600/600",
            position: "right-8 bottom-8",
        },
        {
            title: "Machine Learning & Deep Learning ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            gradient: "from-blue-700 to-indigo-900",
            image: "/api/placeholder/600/600",
            position: "right-8 bottom-8",
        },
        {
            title: "Web Scraping & Big Data Extraction ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
            gradient: "from-purple-600 to-purple-800",
            image: "/api/placeholder/600/600",
            position: "right-8 bottom-8",
        },
        {
            title: "Al for Industry-specific Applications ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            gradient: "from-purple-600 to-purple-800",
            image: "/api/placeholder/600/600",
            position: "right-8 bottom-8",
        },
        {
            title: "Third-Party AI & API Integrations ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            gradient: "from-purple-600 to-purple-800",
            image: "/api/placeholder/600/600",
            position: "right-8 bottom-8",
        },
    ];

    return (
        <>

<Navbar></Navbar>


            <div className="flex flex-col w-screen items-center mt-24">
                <h1 className="text-6xl font-[5px] mb-6 font-Montserrat bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent inline scale-x-110">
                    Explore our services
                </h1>




                <Searchbar />
                <div className="w-full py-8 px-4 font-Montserrat">
                    <div className="flex flex-wrap justify-center gap-3">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                className="px-6 py-2 rounded-full border text-lg border-gray-500 bg-gray-800/50 hover:bg-gray-500 text-white transition-colors duration-200"
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gray-950 p-6">
                <div className="max-w-6xl mx-auto space-y-6">
                    {Array.from({ length: Math.ceil(servicesCard.length / 2) }).map(
                        (_, rowIndex) => {
                            const firstIndex = rowIndex * 2;
                            const secondIndex = firstIndex + 1;

                            const card1 = servicesCard[firstIndex];
                            const card2 = servicesCard[secondIndex];

                            const isEvenRow = rowIndex % 2 === 0;

                            const renderCard = (card: any, widthClass: any, index: any) => {

                                return (
                                    <div
                                        key={index}
                                        className={`rounded-3xl overflow-hidden relative bg-gradient-to-br ${card.gradient} ${widthClass} h-80`}
                                    >
                                        {card.image && (
                                            <div
                                                className="absolute inset-0 bg-cover bg-center z-0"
                                                style={{ backgroundImage: `url(${card.image})` }}
                                            />
                                        )}

                                        <div className={"absolute z-10 max-w-xs bottom-1 left-2"}>
                                            <h2 className="text-3xl font-medium font-Montserrat text-white mb-3">
                                                {card.title}
                                            </h2>
                                            <p className="text-gray-300 font-light font-Montserrat">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            };

                            if (!card2) {
                                return (
                                    <div key={rowIndex} className="flex flex-col md:flex-row">
                                        {renderCard(card1, "w-full", firstIndex)}
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={rowIndex}
                                    className="flex flex-row justify-between gap-6"
                                >
                                    {isEvenRow ? (
                                        <>
                                            {renderCard(card1, "md:w-[70%]", firstIndex)}
                                            {renderCard(card2, "md:w-[30%]", secondIndex)}
                                        </>
                                    ) : (
                                        <>
                                            {renderCard(card1, "md:w-[30%]", firstIndex)}
                                            {renderCard(card2, "md:w-[70%]", secondIndex)}
                                        </>
                                    )}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Services;