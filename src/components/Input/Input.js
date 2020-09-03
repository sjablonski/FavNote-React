import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({
  tag: Tag,
  error,
  errorMessage,
  type,
  name,
  label,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <Tag
        className={Tag === "input" ? styles.input : styles.textarea}
        type={type}
        name={name}
        id={name}
        {...props}
        placeholder=" "
      />
      <label
        htmlFor={name}
        className={error ? styles.errorLabel : styles.label}
      >
        {label}
      </label>
      {error && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  error: false,
  errorMessage: "",
  tag: "input",
  type: "text",
};

export default Input;
