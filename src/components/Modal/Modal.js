import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const Modal = ({ children, toggleModalFn }) => (
  <>
    <div className={styles.wrapper} onClick={toggleModalFn} />
    <div className={styles.modal}>
      <button className={styles.closeButton} onClick={toggleModalFn}></button>
      {children}
    </div>
  </>
);

Modal.propTypes = {
  toggleModalFn: PropTypes.func.isRequired,
};

export default Modal;
