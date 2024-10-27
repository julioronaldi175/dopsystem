import Carousel from "@/Components/Carousel";
import PricingSingle from "@/Components/Pricing/PricingSingle";
import LandingLayout from "@/Layouts/LandingLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pricing(props) {
    const [loading, setLoading] = useState(true);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchPricingData = async () => {
            try {
                const response = await axios.get(route("pricing.get")); // Ensure this route is valid
                if (response.status === 200) {
                    let pricings = response.data.pricings;
                    // console.log(pricings);

                    // Ensure pricings is an array
                    pricings = Array.isArray(pricings)
                        ? pricings
                        : Object.values(pricings);

                    const slidesArray = [];
                    pricings.forEach((pricing, index) => {
                        slidesArray.push(
                            <PricingSingle
                                key={index}
                                name={pricing.service_name}
                                pricings={pricing.pricing}
                                serviceId={pricing.service_id}
                            ></PricingSingle>
                        );
                    });
                    setSlides(slidesArray);
                }
                setLoading(false); // Stop loading once data is fetched
            } catch (error) {
                console.error("Error fetching pricing data", error);
                setLoading(false);
            }
        };

        fetchPricingData();
    }, []);

    return (
        <LandingLayout props={props}>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {!loading && slides.length > 0 && (
                        <Carousel slides={slides} autoSlideInterval={25000} />
                    )}

                    {loading && (
                        <div className="py-12">
                            Please Wait{" "}
                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    )}
                </div>
            </section>
        </LandingLayout>
    );
}
