import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";

const ListItem = ({ image, title, description, link, removeItemFn }) => {
  const imageStyle = image ? styles.image : styles.imageNone;

  return (
    <li className={styles.wrapper}>
      {image && <img className={imageStyle} alt={title} src={image} />}
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {link && <Button href={link}>visit page</Button>}
        <Button type="danger" onClick={removeItemFn}>
          delete
        </Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  removeItemFn: PropTypes.func.isRequired,
};

export default ListItem;
