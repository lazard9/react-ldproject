import PropTypes from "prop-types";
import "./Content.scss";

const Content = ({ textAlignment, maxWidth, spacing, children }) => {
  const alignment = textAlignment ? `text-alignment--${textAlignment}` : "";
  const mWidth = maxWidth ? `max-width--${maxWidth}` : "max-width--default";
  const marBottom = spacing ? `mar-bottom--${spacing}` : "mar-bottom--default";

  return (
    <div className={`content ${alignment} ${mWidth} ${marBottom}`}>
      {children}
    </div>
  );
};

Content.propTypes = {
  textAlignment: PropTypes.oneOf(["left", "center", "right"]),
  maxWidth: PropTypes.string,
  spacing: PropTypes.oneOf(["default", "minimal", "none"]),
  children: PropTypes.node.isRequired,
};

export default Content;
