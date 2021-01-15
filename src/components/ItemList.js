import React, { Component } from "react";
import styles from "./ItemList.module.scss";
import cx from "classnames";
import "bulma/css/bulma.css";

const exampleStrings = [
  "Occaecat Lorem sit consequat proident incididunt laboris tempor laboris.",
  "Magna excepteur Lorem mollit anim ex deserunt eu.",
  "Do dolor Lorem voluptate mollit ad exercitation culpa occaecat sint excepteur ea minim.",
  "In cillum adipisicing incididunt officia labore sint laborum minim irure do proident qui adipisicing nostrud.",
];

class ItemsList extends Component {
  state = {
    isCollapsed: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const listClass = cx(styles.list, {
      [styles.isCollapsed]: this.state.isCollapsed,
    });

    return (
      <div>
        <button class="button is-dark" onClick={this.toggle}>
          Close
        </button>
        <div class="notification ">
          <button class="delete"></button>
          <ul className={listClass}>
            {exampleStrings.map((item) => (
              <li class="notifaction">{item}</li>
            ))}
          </ul>
          <p className={styles.text}>
            Is list collapsed {this.state.isCollapsed.toString()}
          </p>
        </div>
      </div>
    );
  }
}

export default ItemsList;
