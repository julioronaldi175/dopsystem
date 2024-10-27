import React, { useEffect } from "react";
import PricingCard from "./PricingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faInfo,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { router } from "@inertiajs/react";

export default function PricingSingle({ name, serviceId, pricings }) {
    const pricingCards = [];
    pricings.forEach((pricing, index) => {
        pricingCards.push(
            <PricingCard
                key={index}
                packageName={pricing.name}
                details={pricing.sub_points}
                price={pricing.price}
                priceInterval={pricing.price_interval}
                isPopular={pricing.is_popular}
            />
        );
    });

    return (
        <div className="slide-container p-4">
            <div className="text-center">
                <p className="select-none text-sm font-extrabold text-gray-400 px-8 md:px-0">
                    PAKET
                </p>
                <h2
                    className="select-none text-4xl font-extrabold text-gray-700 px-8 md:px-0 cursor-pointer"
                    onClick={() => {
                        router.visit(route("landing.services", serviceId));
                    }}
                >
                    {name}
                </h2>
            </div>

            <div
                className={`mt-10 grid grid-cols-1 ${
                    pricings.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                } gap-8`}
            >
                {pricingCards}
            </div>

            <div className="mt-10 flex justify-center items-center">
                <button
                    className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400"
                    onClick={() => {
                        router.visit(route("landing.services", serviceId));
                    }}
                >
                    <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-2"
                    ></FontAwesomeIcon>
                    <span className="font-normal">Selengkapnya tentang</span>{" "}
                    Paket {name}
                </button>
            </div>
        </div>
    );
}
