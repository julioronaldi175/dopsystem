import React, { useState } from "react";
import PropTypes from "prop-types";
import { router } from "@inertiajs/react";

const NavigationItem = ({ href, label, subLinks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const navigate = () => {
        if (href) router.visit(href);
    };

    return (
        <div className="relative">
            <button
                onClick={
                    subLinks && subLinks.length > 0 ? handleToggle : navigate
                }
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                {label}
                {subLinks && subLinks.length > 0 && (
                    <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                            isOpen ? "transform rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>

            {isOpen && subLinks && subLinks.length > 0 && (
                <div className="absolute z-10 mt-1 bg-white rounded-md shadow-lg">
                    {subLinks.map((subLink, index) => (
                        <a
                            key={index}
                            href={subLink.href}
                            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 whitespace-nowrap"
                        >
                            {subLink.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    subLinks: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
};

NavigationItem.defaultProps = {
    subLinks: [],
};

export default NavigationItem;
