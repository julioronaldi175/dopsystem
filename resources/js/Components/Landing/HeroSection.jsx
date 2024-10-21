import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroSection = ({
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    imageUrl,
}) => {
    return (
        <section className="px-2 py-12 md:py-16 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-6 mx-auto xl:px-5">
                <div className="flex flex-col-reverse gap-8 md:gap-0 md:flex-row flex-wrap items-center sm:-mx-3">
                    {/* Left side - text content */}
                    <div className="w-full md:w-1/2 md:px-3">
                        <HeroText
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            primaryAction={primaryAction}
                            secondaryAction={secondaryAction}
                        />
                    </div>

                    {/* Right side - image */}
                    <div className="w-full md:w-1/2">
                        <HeroImage imageUrl={imageUrl} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
