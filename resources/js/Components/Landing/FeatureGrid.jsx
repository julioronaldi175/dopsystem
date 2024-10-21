// FeatureGrid.js
import React from "react";

const FeatureGrid = ({ features, title = "" }) => {
    return (
        <section className="py-12 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {title}
                    </h2>
                </div>

                <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col-reverse md:flex-row items-center justify-center gap-6 ${
                                index % 2 === 0 ? "" : "md:flex-row-reverse"
                            }`}
                        >
                            <div
                                className={`flex-1 flex flex-col justify-center ${
                                    index % 2 === 0 ? "text-end" : "text-start"
                                }`}
                            >
                                <h3 className="text-2xl font-bold text-gray-700">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="flex-1 w-full">
                                <div
                                    className={`${
                                        index % 2 === 0
                                            ? "ml-auto md:mr-auto md:ml-0"
                                            : "mr-auto md:ml-auto md:mr-0"
                                    } bg-indigo-600 rounded-xl w-32 h-32 text-center text-white text-4xl flex items-center justify-center`}
                                >
                                    {feature.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
