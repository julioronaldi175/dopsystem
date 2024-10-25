import React from "react";
import PricingCard from "./PricingCard";

export default function PricingSingle({ name, pricings }) {
    return (
        <div className="slide-container p-4">
            <div className="text-center">
                <p className="select-none text-sm font-extrabold text-gray-700 px-8 md:px-0">
                    PAKET
                </p>
                <h2 className="select-none text-3xl font-extrabold text-gray-700 px-8 md:px-0">
                    {name}
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricings.map((pricing, index) => (
                    <PricingCard
                        key={index}
                        packageName={pricing.name}
                        details={pricing.sub_points}
                        price={pricing.price}
                        priceInterval={pricing.price_interval}
                        isPopular={pricing.is_popular}
                    />
                ))}
            </div>
        </div>
    );
}
