import Heading from "../partials/Heading.jsx";
import reactLogo from "../../assets/images/react.svg";
import viteLogo from "../../assets/images/vite.svg";
import "./HeroSection.scss";

const HeroSection = ({ heroBackgroundImage, children }) => {
    return (
        <>
            <section
                className="hero"
                style={{ backgroundImage: `url(${heroBackgroundImage})` }}
            >
                <Heading headingTag={1} headingLevel={1} modifierClass="hero">
                    {children}
                </Heading>
                <a
                    className="hero__icon"
                    href="https://vitejs.dev"
                    target="_blank"
                >
                    <img src={viteLogo} className="logo vite" alt="Vite logo" />
                </a>
                <a
                    className="hero__icon"
                    href="https://react.dev"
                    target="_blank"
                >
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </section>
        </>
    );
};

export default HeroSection;
