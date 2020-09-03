import React from "react";
import PropTypes from "prop-types";
import styles from "./AlertBox.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const AlertBox = ({ onClickCancel, onClickAccept }) => (
  <div>
    <Title>Are you sure you want to delete the entry?</Title>
    <div className={styles.buttonWrapper}>
      <Button onClick={onClickCancel}>cancel</Button>
      <Button type="danger" onClick={onClickAccept}>
        delete
      </Button>
    </div>
  </div>
);

AlertBox.propTypes = {
  onClickCancel: PropTypes.func.isRequired,
  onClickAccept: PropTypes.func.isRequired,
};

export default AlertBox;
