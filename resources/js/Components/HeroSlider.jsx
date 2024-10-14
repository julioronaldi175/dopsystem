import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const HeroSlider = () => {
    // Slides data with background images
    const slides = [
        {
            title: "Mengapa Torch?",
            description:
                "Menurut tradisi, ketika mengandung putranya, Dominic, Beata Jane dari Aza mendapat penglihatan seekor anjing yang berlari ke seluruh dunia, dengan obor yang menyala-nyala di mulutnya.",
            backgroundImage: "url('/images/hero.jpg')", // Add your image path
        },
        {
            title: "Torch dan Misinya",
            description:
                "Torch memiliki misi untuk menyalakan obor harapan dan memberikan dukungan kepada para siswa yang menghadapi tantangan dalam pendidikan mereka.",
            backgroundImage: "url('/images/hero.jpg')",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide every 20 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 20000); // 20 seconds

        return () => clearInterval(slideInterval); // Cleanup on unmount
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-auto py-16 select-none overflow-hidden">
            {/* Background image container */}
            <div
                className="absolute inset-0 z-0 blur-2xl"
                style={{
                    backgroundImage: slides[currentSlide].backgroundImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.5, // Set the opacity here
                    zIndex: 0, // Put it behind the text
                }}
            ></div>

            {/* Optional: Background color with blend mode */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Blend with semi-transparent black
                    backgroundImage: slides[currentSlide].backgroundImage,
                    backgroundBlendMode: "multiply", // Choose blend mode: multiply, screen, overlay, etc.
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0, // Put it behind the text
                }}
            ></div>
            <div className="relative w-3/4 md:max-w-5xl px-6 mx-auto text-center h-64 md:h-80 lg:h-96 xl:h-[450px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 md:top-24 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
                        }`}
                    >
                        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white/95 font-pj">
                            {slide.title}
                        </h1>
                        <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/75 font-inter">
                            {slide.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                    className="text-2xl rounded-full duration-100 md:bg-gray-500/25 md:hover:bg-gray-300/50 text-white/50 md:text-white/25 hover:text-white md:h-16 md:w-16 w-12 h-12 text-start md:text-center"
                    onClick={prevSlide}
                >
                    <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                    className="text-2xl rounded-full duration-100 md:bg-gray-500/25 md:hover:bg-gray-300/50 text-white/50 md:text-white/25 hover:text-white md:h-16 md:w-16 w-12 h-12 text-end md:text-center"
                    onClick={nextSlide}
                >
                    <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default HeroSlider;
