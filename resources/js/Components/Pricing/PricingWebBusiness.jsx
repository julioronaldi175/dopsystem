import React from "react";
import PricingCard from "../PricingCard";
import { packagesWebBusiness } from "@/Constants/Pricing";

export default function PricingWebBusiness() {
    return (
        <div className="slide-container p-4">
            <div className="text-center">
                <p className="select-none text-sm font-extrabold text-gray-700 px-8 md:px-0">
                    PAKET
                </p>
                <h2 className="select-none text-3xl font-extrabold text-gray-700 px-8 md:px-0">
                    WEB BISNIS
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {packagesWebBusiness.map((pkg, index) => (
                    <PricingCard
                        key={index}
                        packageName={pkg.packageName}
                        details={pkg.details}
                        price={pkg.price}
                        description={pkg.description}
                        isPopular={pkg.isPopular}
                    />
                ))}
            </div>
        </div>
    );
}
