import PropTypes from "prop-types";
import CardImage from "./CardImage";
import Heading from "./Heading";
import Content from "./Content";
import CtaInternalLink from "./CtaInternalLink";

import "./DestinationCard.scss";

const DestinationCard = ({ destination }) => {
  const {
    title,
    slug,
    imgUrl,
    imgAlt = "Default Alt",
    description,
    ctaText = "Default CTA",
  } = destination;

  return (
    <div className="destination-card">
      <div className="destination-card__image-holder">
        <CardImage imgUrl={imgUrl} altText={imgAlt} />
      </div>
      <Heading headingLevel={4}>{title}</Heading>
      <Content maxWidth="none" spacing="minimal">
        <p>
          {description.length > 120
            ? `${description.slice(0, 120)}...`
            : description}
        </p>
      </Content>
      <CtaInternalLink link={`/destinations/${slug}`}>
        {ctaText}
      </CtaInternalLink>
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slug: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ctaText: PropTypes.string,
  }).isRequired,
};

export default DestinationCard;
