import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ChatWAButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.link/6k68lj"
            className={`flex justify-center items-center z-50 fixed bottom-24 right-5 rounded-full border border-green-600/50 bg-green-600 hover:bg-green-600/75 bg-opacity-70 shadow-sm transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ width: "48px", height: "48px" }}
        >
            <span className="material-icons text-white text-xl">
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
            </span>
        </a>
    );
};

export default ChatWAButton;
