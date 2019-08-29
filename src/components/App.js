import React, { Component } from "react";
import "./App.css";
import Start from "./Start";
import Time from "./Time";

class App extends Component {
  state = {
    running: false,
    clean: true,
    times: {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    }
  };
  timer() {
    // console.log(`
    //   ${this.state.times.miliseconds}:
    //     ${this.state.times.seconds}:
    //     ${this.state.times.minutes}
    // `);
    let { miliseconds, seconds, minutes } = this.state.times;
    miliseconds += 1;
    if (miliseconds >= 100) {
      miliseconds = 0;
      seconds += 1;
    }
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    this.setState(prevState => ({
      running: false,
      clean: true,
      times: {
        minutes,
        seconds,
        miliseconds
      }
    }));
  }
  handleStart() {
    if (!this.state.running) {
      this.watch = setInterval(this.timer.bind(this), 10);
    }
  }
  render() {
    const { miliseconds, seconds, minutes } = this.state.times;
    return (
      <div className="container mt-4">
        <div className="buttons">
          <Start click={this.handleStart.bind(this)} />
        </div>
        <div className="time text-center">
          <Time miliseconds={miliseconds} seconds={seconds} minutes={minutes} />
        </div>
      </div>
    );
  }
}

export default App;
