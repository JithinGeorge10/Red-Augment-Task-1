'use client'
import { Briefcase, ChevronDown, Info, Logs, Menu, X } from "lucide-react";
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleBlogsClick = () => {
        router.push(`/Blogs`);
        setDropdownOpen(false);
    };

    const handleNavClick = (label: any) => {
        router.push(`/${label}`);
    };

    return (
        <nav className="w-full py-5 px-6 md:px-14 flex justify-between items-center bg-transparent">
            <div className="flex items-center gap-1">
                <img src="/logo.jpg" alt="Red Augment" className="h-10" />
                <span className="text-white font-light text-lg font-Montserrat inline-block">
                    Red Augment
                </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-Montserrat relative">
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
                                <div className="absolute top-full left-0 mt-1 bg-gray-800 text-white text-sm rounded-md shadow-lg z-50 w-36">
                                    <button className="hover:bg-gray-700 w-full px-3 py-2 text-left flex gap-1">
                                        <Info className="w-4 h-4 mt-1" />
                                        About
                                    </button>
                                    <button
                                        onClick={handleBlogsClick}
                                        className="hover:bg-gray-700 w-full px-3 py-2 text-left flex gap-1"
                                    >
                                        <Logs className="w-4 h-4 mt-1" />
                                        Blogs
                                    </button>
                                    <button className="hover:bg-gray-700 w-full px-3 py-2 text-left flex gap-1">
                                        <Briefcase className="w-4 h-4 mt-1" />
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

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-gray-900 text-white font-Montserrat px-6 py-4 flex flex-col gap-4 md:hidden z-50">
                    {navItems.map((item) =>
                        item.hasDropdown ? (
                            <div key={item.label}>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-1 text-white"
                                >
                                    {item.label}
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                {dropdownOpen && (
                                    <div className="mt-2 space-y-2 pl-4 text-sm">
                                        <button className="flex items-center gap-2 hover:text-gray-300">
                                            <Info className="w-4 h-4" />
                                            About
                                        </button>
                                        <button
                                            onClick={handleBlogsClick}
                                            className="flex items-center gap-2 hover:text-gray-300"
                                        >
                                            <Logs className="w-4 h-4" />
                                            Blogs
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-gray-300">
                                            <Briefcase className="w-4 h-4" />
                                            Careers
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : item.label === "Services" || item.label === "Pricing" ? (
                            <button
                                key={item.label}
                                onClick={() => handleNavClick(item.label)}
                                className="text-white hover:text-gray-300"
                            >
                                {item.label}
                            </button>
                        ) : (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-white hover:text-gray-300"
                            >
                                {item.label}
                            </a>
                        )
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
