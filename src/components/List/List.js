import React from "react";
import PropTypes from "prop-types";
import styles from "./List.module.scss";
import ListItem from "./ListItem";
import AppContext from "../../context";

const List = ({ values }) => (
  <AppContext.Consumer>
    {({ toggleRemoveItemModal }) =>
      values.length ? (
        <ul className={styles.wrapper}>
          {values.map((item) => (
            <ListItem
              key={item.uuid}
              removeItemFn={() => toggleRemoveItemModal(item)}
              {...item}
            />
          ))}
        </ul>
      ) : (
        <h1 className={styles.noItems}>
          There's nothing here yet, please add some items!{" "}
          <span role="img" aria-label="red heart">
            {"\u2764\uFE0F"}
          </span>
        </h1>
      )
    }
  </AppContext.Consumer>
);

List.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
};

export default List;
