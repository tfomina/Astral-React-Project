import React, { Component } from "react";
import styles from "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      number: this.state.number + 1
    });
  }

  decreaseCounter() {
    this.setState({
      number: this.state.number - 1
    });
  }

  resetCounter() {
    this.setState({
      number: 0
    });
  }

  render() {
    const { number } = this.state;
    return (
      <>
        <h4>Счетчик</h4>
        <div className={styles.number}>{number}</div>
        <div>
          <button onClick={this.increaseCounter}>Увеличить</button>
          <button onClick={this.decreaseCounter}>Уменьшить</button>
          <button onClick={this.resetCounter}>Сбросить</button>
        </div>
      </>
    );
  }
}

export default Counter;
