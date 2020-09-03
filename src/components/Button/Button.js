import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const selectStyle = (type) => {
  switch (type) {
    case "secondary":
      return styles.secondary;
    case "danger":
      return styles.danger;
    default:
      return styles.button;
  }
};

const Button = ({ children, href, type, ...props }) => {
  const className = selectStyle(type);

  return (
    <div className={styles.wrapper}>
      {href ? (
        <a
          className={className}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {" "}
          {children}
        </a>
      ) : (
        <button className={className} {...props}>
          {children}
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
