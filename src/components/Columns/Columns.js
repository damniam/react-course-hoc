import React from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";
import withCollapse from "../../hoc/withCollapse";
import withAuth from "../../hoc/withAuth";

const Columns = ({
  isCollapsed,
  toggle,
  isAuthorised,
  helloDamian,
  toggleAuth,
}) => {
  const tableClass = cx("columns", {
    [styles.isCollapsed]: isCollapsed,
  });
  return (
    <div className="columns">
      <div className="column">
        <button className="button is-dark is-large" onClick={toggle}>
          Collapse
        </button>
        <p>isAuthorised is {isAuthorised.toString()}</p>
        <button
          className="button is-warning is-dark is-large"
          onClick={toggleAuth}
        >
          {isAuthorised ? "logout" : "login"}
        </button>
        {isAuthorised ? (
          <div className={tableClass}>
            <div className="column">
              <div className="notification is-primary">{helloDamian}</div>
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
        ) : (
          <h3 className="title is-2">You must sign in to see this content </h3>
        )}
      </div>
    </div>
  );
};

export default withAuth(withCollapse(Columns));
