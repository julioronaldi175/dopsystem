// PricingCard.js
import {
    faCheckCircle,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PricingCard = ({
    packageName,
    details,
    price,
    priceInterval,
    isPopular,
}) => {
    const detailItems = [];
    details.forEach((detail, index) => {
        detailItems.push(
            <li key={index}>
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-2"
                />{" "}
                {detail}
            </li>
        );
    });

    return (
        <div
            className={`border border-gray-200/75 bg-white px-8 py-12 rounded-lg shadow-lg ${
                isPopular ? "relative" : ""
            }`}
        >
            {isPopular && (
                <span className="select-none absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                    <i className="fas fa-check-circle mr-1"></i> POPULAR
                </span>
            )}
            <div className="flex flex-col items-center justify-between h-full">
                <div>
                    <h1 className="text-center select-none text-3xl font-semibold text-orange-500">
                        {packageName}
                    </h1>
                    <div className="mt-2 mb-4 text-center">
                        <p className="text-3xl font-extrabold text-gray-900 select-none">
                            {price}
                            {priceInterval && (
                                <span className="font-normal text-gray-400 text-base">
                                    {priceInterval}
                                </span>
                            )}
                        </p>
                    </div>
                    <ul className="mt-6 space-y-2 text-gray-700 text-sm select-none text-start">
                        {detailItems}
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="inline-block px-6 py-3 text-lg bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="mr-2"
                        ></FontAwesomeIcon>
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
