import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const TwittersView = () => (
  <AppContext.Consumer>
    {({ twitter }) => <List values={twitter} />}
  </AppContext.Consumer>
);

export default TwittersView;
