import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const GoToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`z-50 fixed bottom-8 right-5 rounded-full border border-gray-300 bg-white bg-opacity-70 shadow-sm transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ width: "48px", height: "48px" }}
        >
            <span className="material-icons text-gray-500 text-lg">
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </span>
        </button>
    );
};

export default GoToTopButton;
