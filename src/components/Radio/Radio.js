import React from "react";
import PropTypes from "prop-types";
import styles from "./Radio.module.scss";

const Radio = ({ children, name, value, ...props }) => (
  <label className={styles.label}>
    <input
      className={styles.input}
      type="radio"
      id={value}
      name={name}
      {...props}
      value={value}
    />
    <div className={styles.customRadioButton} />
    {children}
  </label>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Radio;
