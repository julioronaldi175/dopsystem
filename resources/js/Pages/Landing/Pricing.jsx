import Carousel from "@/Components/Carousel";
import PricingDigitalMarketing from "@/Components/Pricing/PricingDigitalMarketing";
import PricingLogo from "@/Components/Pricing/PricingLogo";
import PricingVideoReels from "@/Components/Pricing/PricingVideoReels";
import PricingWebBusiness from "@/Components/Pricing/PricingWebBusiness";
import PricingWebCommunity from "@/Components/Pricing/PricingWebCommunity";
import LandingLayout from "@/Layouts/LandingLayout";
import React from "react";

export default function Pricing(props) {
    const slides = [
        PricingDigitalMarketing,
        PricingLogo,
        PricingWebCommunity,
        PricingWebBusiness,
        PricingVideoReels,
    ];
    return (
        <LandingLayout props={props}>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Carousel
                        slides={slides}
                        autoSlideInterval={25000}
                    ></Carousel>
                </div>
            </section>
        </LandingLayout>
    );
}
