import React from "react";
import PricingCard from "../PricingCard";
import { packagesLogo } from "@/Constants/Pricing";

export default function PricingLogo() {
    return (
        <div className="slide-container p-4">
            <div className="text-center">
                <p className="select-none text-sm font-extrabold text-gray-700 px-8 md:px-0">
                    PAKET
                </p>
                <h2 className="select-none text-3xl font-extrabold text-gray-700 px-8 md:px-0">
                    LOGO
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {packagesLogo.map((pkg, index) => (
                    <PricingCard
                        key={index}
                        packageName={pkg.packageName}
                        details={pkg.details}
                        price={pkg.price}
                        isPopular={pkg.isPopular}
                    />
                ))}
            </div>
        </div>
    );
}