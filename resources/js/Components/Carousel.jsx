// Carousel.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ slides, autoSlideInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically switch slides based on timer
    useEffect(() => {
        const timer = setInterval(() => {
            goToNextSlide();
        }, autoSlideInterval);

        // Clear timer when component unmounts
        return () => clearInterval(timer);
    }, [currentIndex]);

    const goToPreviousSlide = () => {
        const newIndex =
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex =
            currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative mx-auto">
            {/* Render the current slide component */}
            <div className="overflow-hidden md:p-12">
                <div
                    className="flex transition-transform ease-in-out duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((SlideComponent, index) => (
                        <div
                            key={index}
                            className={`min-w-full flex justify-center items-center h-full md:px-12`}
                        >
                            <SlideComponent />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                onClick={goToPreviousSlide}
                className="absolute top-16 md:top-1/2 transform -translate-y-1/2 left-4 p-2 bg-gray-400/50 text-white rounded-full hover:bg-gray-600/50 w-10 md:w-12 focus:outline-none"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
                onClick={goToNextSlide}
                className="absolute top-16 md:top-1/2 transform -translate-y-1/2 right-4 p-2 bg-gray-400/50 text-white rounded-full hover:bg-gray-600/50 w-10 md:w-12 focus:outline-none"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default Carousel;
