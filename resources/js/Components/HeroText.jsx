import React from "react";

const HeroText = ({
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
}) => {
    return (
        <div className="select-none w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                <span className="block xl:inline">{title}</span>{" "}
                <span className="block text-orange-500 xl:inline">
                    {subtitle}
                </span>
            </h1>
            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                {description}
            </p>
            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                    href={primaryAction.link}
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-500 rounded-md sm:mb-0 hover:bg-orange-600 sm:w-auto"
                >
                    {primaryAction.text}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a
                    href={secondaryAction.link}
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                    {secondaryAction.text}
                </a>
            </div>
        </div>
    );
};

export default HeroText;
