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

                    // Ensure pricings is an array
                    pricings = Array.isArray(pricings)
                        ? pricings
                        : Object.values(pricings);

                    // Map the pricing data to slides
                    setSlides(
                        pricings.map((pricing, index) => (
                            <PricingSingle
                                key={index} // Ensure the key prop is set
                                name={pricing.service_name}
                                pricings={pricing.pricings}
                            />
                        ))
                    );
                }
                setLoading(false); // Stop loading once data is fetched
            } catch (error) {
                console.error("Error fetching pricing data", error);
                setLoading(false);
            }
        };

        fetchPricingData();
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Show loading state while fetching data
    }

    return (
        <LandingLayout props={props}>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {slides.length > 0 && (
                        <Carousel slides={slides} autoSlideInterval={25000} />
                    )}
                </div>
            </section>
        </LandingLayout>
    );
}
