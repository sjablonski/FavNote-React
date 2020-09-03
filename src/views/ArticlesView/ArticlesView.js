import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const ArticlesView = () => (
  <AppContext.Consumer>
    {({ article }) => <List values={article} />}
  </AppContext.Consumer>
);

export default ArticlesView;
