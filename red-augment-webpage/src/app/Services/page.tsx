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
            image: "/ServiceImages/5.png",
            position: "left-8 bottom-8",
        },
        {
            title: "Generative AI & Large Language Models (LLMs)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            gradient: "from-purple-600 to-purple-800",
            image: "/ServiceImages/2.png",
            position: "right-8 bottom-8",
        },
        {
            title: "Computer Vision & Image Analysis ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            gradient: "from-indigo-600 to-purple-700",
            image: "/ServiceImages/3.png",
            position: "right-8 bottom-8",
        },
        {
            title: "Machine Learning & Deep Learning ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            gradient: "from-blue-700 to-indigo-900",
            image: "/ServiceImages/7.png",
            position: "right-8 bottom-8",
        },
        {
            title: "Web Scraping & Big Data Extraction ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
            gradient: "from-purple-600 to-purple-800",
            image: "/ServiceImages/7.png",
            position: "right-8 bottom-8",
        },
        {
            title: "Al for Industry-specific Applications ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            gradient: "from-purple-600 to-purple-800",
            image: "/ServiceImages/4.jpg",
            position: "right-8 bottom-8",
        },
        {
            title: "Third-Party AI & API Integrations ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            gradient: "from-purple-600 to-purple-800",
            image: "/ServiceImages/8.png",
            position: "right-8 bottom-8",
        },
    ];

    return (
        <>

            <Navbar></Navbar>
            <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
                <div
                    className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-purple-400 rounded-full blur-3xl opacity-20"
                    style={{
                        animation: "rotateOne 20s linear infinite",
                        top: "20%",
                        left: "20%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
                <div
                    className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-purple-800 rounded-full blur-3xl opacity-20"
                    style={{
                        animation: "rotateTwo 20s linear infinite",
                        top: "80%",
                        left: "80%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </div>


            <div className="flex flex-col w-screen items-center mt-16 md:mt-24">
                <h1 className="text-4xl md:text-6xl font-[5px] mb-4 md:mb-6 font-Montserrat bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent inline scale-x-110">                    Explore our services
                </h1>

                <Searchbar />

                <div className="w-full py-4 md:py-8 px-4 font-Montserrat">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {services.slice(0, 2).map((service, index) => (
                            <button
                                key={index}
                                className="px-4 py-1.5 md:px-6 md:py-2 rounded-full border text-base md:text-lg border-gray-500 bg-gray-800/50 hover:bg-gray-500 text-white transition-colors duration-200"
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {services.slice(2).map((service, index) => (
                            <button
                                key={index + 2} // offset index to keep keys unique
                                className="px-4 py-1.5 md:px-6 md:py-2 rounded-full border text-base md:text-lg border-gray-500 bg-gray-800/50 hover:bg-gray-500 text-white transition-colors duration-200"
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            <div className="p-4 md:p-6">
                <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">
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
                                        className={`rounded-2xl md:rounded-3xl overflow-hidden relative bg-gradient-to-br ${card.gradient} ${widthClass} h-64 md:h-80`}
                                    >
                                        {card.image && (
                                            <div
                                                className="absolute inset-0 bg-cover bg-center z-0"
                                                style={{ backgroundImage: `url(${card.image})` }}
                                            />
                                        )}

                                        <div className="absolute z-10 bottom-4 left-4 right-4 md:bottom-2 md:left-2 md:right-2 md:max-w-xs">
                                            <h2 className="text-lg md:text-3xl font-Montserrat text-white mb-2 md:mb-3">
                                                {card.title}
                                            </h2>
                                            <p className="text-sm md:text-base text-gray-300 font-light font-Montserrat">                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            };

                            if (!card2) {
                                return (
                                    <div key={rowIndex} className="flex flex-col">
                                        {renderCard(card1, "w-full", firstIndex)}
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={rowIndex}
                                    className="flex flex-col md:flex-row justify-between gap-4 md:gap-6"
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