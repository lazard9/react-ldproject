import PropTypes from "prop-types";
import "./Container.scss";

const Container = ({ containerWidth, spacing, children }) => {
  const width = containerWidth
    ? `container--${containerWidth}`
    : "container--fluid";
  const padding = spacing ? `padding--${spacing}` : "padding--default";
  const Tag =
    spacing == "none" && width != "container--fluid" ? "div" : "section";

  return <Tag className={`container ${width} ${padding}`}>{children}</Tag>;
};

Container.propTypes = {
  containerWidth: PropTypes.string,
  spacing: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
