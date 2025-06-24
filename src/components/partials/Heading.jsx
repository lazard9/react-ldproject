import PropTypes from 'prop-types';
import "./Heading.scss";

const Heading = ({ headingTag = 2, headingLevel = 2, modifierClass, children }) => {
    const Tag = `h${headingTag}`;
    const Class = `h${headingLevel}`;
    const modifier = modifierClass ? `heading--${modifierClass}` : "";

    return (
        <div className={`heading ${modifier}`}>
            <Tag className={Class}>{children}</Tag>
        </div>
    );
};

Heading.propTypes = {
    headingTag: PropTypes.number,
    headingLevel: PropTypes.number,
    modifierClass: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Heading;
