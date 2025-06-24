import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour 
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="scroll-top">
            <FontAwesomeIcon
                icon={faArrowCircleUp}
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
            />
        </div>
    );
};

export default ScrollToTop;
