import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import "./LandscapeCard.scss";

const LandscapeCardAlt = ({
  cardBackgroundImage,
  title,
  description,
  ctaLink,
  ctaText,
}) => {
  return (
    <div
      className="landscape-card alternate"
      style={{ backgroundImage: `url(${cardBackgroundImage})` }}
    >
      <Heading headingTag={4} headingLevel={5}>
        {title}
      </Heading>
      <p className="landscape-card__description">{description}</p>
      <Link to={ctaLink} className="landscape-card__cta">
        {ctaText}
      </Link>
    </div>
  );
};

LandscapeCardAlt.propTypes = {
  cardBackgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
};

export default LandscapeCardAlt;
