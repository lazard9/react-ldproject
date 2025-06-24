import PropTypes from 'prop-types';
import "./CardImage.scss";

const CardImage = ({ imgUrl, altText, rounded }) => {
    const roundSize = rounded ? `card-image--${rounded}` : "card-image--default";

    return (
        <>
            <img
                src={imgUrl}
                className={`card-image ${roundSize}`}
                alt={altText}
                decoding="async"
            />
        </>
    );
};

CardImage.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    altText: PropTypes.string,
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default CardImage;
