import PropTypes from "prop-types";
import Heading from "./Heading";
import CardImage from "./CardImage";
import "./PortraitCard.scss";

const CardPortrait = ({ imgUrl, imgAlt, title, description }) => {
  return (
    <div className="portrait-card">
      <div className="portrait-card__image-holder">
        <CardImage imgUrl={imgUrl} imgAlt={imgAlt} rounded="circle" />
      </div>
      <Heading headingTag={4} headingLevel={5}>
        {title}
      </Heading>
      <p className="portrait-card__description">{description}</p>
    </div>
  );
};

CardPortrait.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardPortrait;
