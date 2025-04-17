'use client'
import { Briefcase, ChevronDown, Info, Logs } from "lucide-react";
import { cn } from "../utils/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services" },
        { label: "Work", href: "/work" },
        { label: "Company", hasDropdown: true },
        { label: "Pricing" },
    ];

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleBlogsClick = () => {
        router.push(`/Blogs`);
        setDropdownOpen(false);
    };

    const handleNavClick = (label:any) => {
        router.push(`/${label}`);
    };

    return (
        <nav className="w-full py-5 px-14 flex justify-between items-center bg-transparent">
            <div className="flex items-center gap-1">
                <img
                    src="/logo.jpg"
                    alt="Red Augment"
                    className="h-10"
                />
                <span className="text-white font-light text-lg font-Montserrat inline-block">
                    Red Augment
                </span>
            </div>

            <div className="flex items-center gap-8 font-Montserrat relative">
                {navItems.map((item) =>
                    item.hasDropdown ? (
                        <div key={item.label} className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-1 text-gray-300 hover:text-white hover:font-medium transition-colors"
                            >
                                {item.label}
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 bg-gray-600 text-white font-Montserrat text-sm shadow-lg z-50 w-22">
                                    <button className="hover:bg-gray-700 rounded-md w-full px-2 py-1 text-left flex gap-1">
                                        <Info className="w-3 h-3 mt-1" />
                                        About
                                    </button>
                                    <button
                                        onClick={handleBlogsClick}
                                        className="hover:bg-gray-700 rounded-md w-full px-2 py-1 text-left flex gap-1"
                                    >
                                        <Logs className="w-3 h-3 mt-1" />
                                        Blogs
                                    </button>
                                    <button className="hover:bg-gray-700 rounded-md w-full px-2 py-1 text-left flex gap-1">
                                        <Briefcase className="w-3 h-3 mt-1" />
                                        Careers
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : item.label === "Services" || item.label === "Pricing" ? (
                        <button
                            key={item.label}
                            onClick={() => handleNavClick(item.label)}
                            className="text-gray-300 hover:text-white hover:font-medium transition-colors"
                        >
                            {item.label}
                        </button>
                    ) : (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-white hover:font-medium transition-colors"
                        >
                            {item.label}
                        </a>
                    )
                )}
            </div>
        </nav>
    );
};

export default Navbar;
