import React, { Component } from "react";
import styles from "./App.css";

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list } = this.props;
    const { title, items } = list;

    return (
      <>
        <h4>{title}</h4>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index}>{item.value}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default List;
