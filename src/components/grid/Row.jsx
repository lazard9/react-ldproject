import PropTypes from "prop-types";
import "./Row.scss";

const Row = ({ margin, marginLg, children }) => {
  return (
    <div
      className={`row ${margin ? `mb-row-${margin}` : ""}  ${
        marginLg ? `mb-row-lg-${marginLg}` : ""
      }`}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

export default Row;
