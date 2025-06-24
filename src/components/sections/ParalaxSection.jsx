import Heading from "../partials/Heading.jsx";
import "./ParalaxSection.scss";

const ParalaxSection = ({
    paralaxBackgroundImage,
    children,
}) => {
    return (
        <>
            <section
                className="paralax"
                style={{ backgroundImage: `url(${paralaxBackgroundImage})` }}
            >
                <Heading modifierClass="paralax">
                    {children}
                </Heading>
            </section>
        </>
    );
};

export default ParalaxSection;