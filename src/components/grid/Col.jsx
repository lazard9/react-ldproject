import PropTypes from 'prop-types';
import "./Col.scss";

const Col = ({ xs, sm, md, lg, xl, margin, marginLg, children }) => {
    return (
        <div
            className={`col col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${margin ? `mb-col-${margin}` : ""}  ${marginLg ? `mb-col-lg-${marginLg}` : ""}`}
        >
            {children}
        </div>
    );
};

Col.propTypes = {
    xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    marginLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
};

export default Col;
