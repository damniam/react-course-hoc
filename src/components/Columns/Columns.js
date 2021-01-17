import React from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";
import withCollapse from "../../hoc/withCollapse";

const Columns = ({ isCollapsed, toggle }) => {
  const tableClass = cx("columns", {
    [styles.isCollapsed]: isCollapsed,
  });
  return (
    <div className="columns">
      <div className="column">
        <button className="button is-dark is-large" onClick={toggle}>
          Collapse
        </button>
        <div className={tableClass}>
          <div className="column">
            <div className="notification is-primary">First column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Second column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Third column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Fourth column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withCollapse(Columns);
