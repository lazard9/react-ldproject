import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CtaButton.scss";

const CtaButton = ({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  const className = `cta-button cta-button--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

CtaButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  type: PropTypes.string,
};

export default CtaButton;
