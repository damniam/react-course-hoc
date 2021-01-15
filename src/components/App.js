import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import Doc from "../views/Doc";
import Tips from "../views/Tips";
import Components from "../views/Components";
import Patterns from "../views/Patterns";
import Header from "../components/Header";
import cx from "classnames";
import styles from "./App.scss";
import ItemList from "./ItemList";

// import "./shared.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Route exact path="/" component={Doc} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/patterns" component={Patterns} />
        <Route exact path="/components" component={Components} />
      </div>
    </BrowserRouter>
  );
}

export default App;
