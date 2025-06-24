import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Heading from "./Heading";
import CardImage from "./CardImage";
import "./ProductCard.scss";

const ProductCard = ({ imgUrl, imgAlt, title, description, ctaLink, ctaText }) => {
    return (
        <div className="product-card">
            <div className="product-card__image-holder">
                <CardImage imgUrl={imgUrl} imgAlt={imgAlt} />
            </div>
            <Heading headingTag={4} headingLevel={5}>
                {title}
            </Heading>
            <p className="product-card__description">{description}</p>
            <Link to={ctaLink} className="product-card__cta">
                {ctaText}
            </Link>
        </div>
    );
};

ProductCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ctaLink: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
};

export default ProductCard;
