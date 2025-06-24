import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CtaInternalLink.scss';

const CtaButton = ({ link, children }) => {
    return (
        <Link to={link} className="cta-internal-link">
            {children}
        </Link>
    );
};

CtaButton.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CtaButton;
