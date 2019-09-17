import React, { Component } from "react";
import Counter from "./Counter.js";
import List from "./List.js";
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: {
        title: "Заголовок списка",
        items: [
          { value: "Lorem ipsum" },
          { value: "dolor sit amet" },
          { value: "consectetur adipiscing elit" }
        ]
      }
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className={styles.app}>
        <h1>React Project</h1>
        <Counter />
        <List list={list} />
      </div>
    );
  }
}

export default App;
