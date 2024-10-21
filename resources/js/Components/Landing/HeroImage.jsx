import React from "react";

const HeroImage = ({ imageUrl }) => {
    return (
        <div className="w-full h-auto overflow-hidden rounded-md shadow-md md:shadow-xl sm:rounded-xl">
            <img
                src={imageUrl}
                alt="Hero image"
                className=" object-cover w-full h-full"
            />
        </div>
    );
};

export default HeroImage;
