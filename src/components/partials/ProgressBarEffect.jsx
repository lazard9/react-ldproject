import { useState, useEffect } from "react";
import "./ProgressBar.scss";

const ProgressBarEffect = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight - windowHeight;
            const scrollPercentage = (scrollTop / bodyHeight) * 100;
            setScroll(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <div className="progress-bar" style={{ width: `${scroll}%` }}></div>;
};

export default ProgressBarEffect;

