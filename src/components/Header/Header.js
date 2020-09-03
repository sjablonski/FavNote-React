import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";
import Button from "../Button/Button";

const Header = ({ toggleModalFn }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.logo}>FavNote.</h1>
    <HeaderNavigation />
    <Button type="secondary" onClick={toggleModalFn}>
      new item
    </Button>
  </header>
);

Header.propTypes = {
  toggleModalFn: PropTypes.func.isRequired,
};

export default Header;
