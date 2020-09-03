import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
  <nav>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          exact
          to="/"
          className={styles.navItemLink}
          activeClassName={styles.navItemLinkActive}
        >
          twitters
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/articles"
          className={styles.navItemLink}
          activeClassName={styles.navItemLinkActive}
        >
          articles
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="notes"
          className={styles.navItemLink}
          activeClassName={styles.navItemLinkActive}
        >
          notes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default HeaderNavigation;
