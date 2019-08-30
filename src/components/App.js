import React, { Component } from "react";
import "./App.css";
import Start from "./Start";
import Stop from "./Stop";
import Zero from "./Zero";
import Add from "./Add";
import Clean from "./Clean";
import Time from "./Time";
import ListItems from "./ListItems";

class App extends Component {
  state = {
    running: false,
    zero: true,
    times: {
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      id: 0
    },
    list: [],
    activeBtn: ""
  };
  count() {
    let { minutes, miliseconds, seconds } = this.state.times;
    miliseconds += 1;
    if (miliseconds >= 100) {
      miliseconds = 0;
      seconds += 1;
    }
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    return { minutes, miliseconds, seconds };
  }
  timer() {
    const { minutes, miliseconds, seconds } = this.count();

    this.setState(prevState => ({
      running: true,
      zero: false,
      times: {
        minutes,
        seconds,
        miliseconds,
        id: prevState.times.id
      },
      list: prevState.list,
      activeBtn: "start"
    }));
  }
  handleStart() {
    if (!this.state.running) {
      this.watch = setInterval(this.timer.bind(this), 10);
    }
  }
  handleZero() {
    if (!this.state.clean) {
      clearInterval(this.watch);

      this.setState(prevState => ({
        running: false,
        zero: true,
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0,
          id: prevState.times.id
        },
        list: prevState.list,
        activeBtn: "zero"
      }));
    }
  }
  handleStop() {
    if (this.state.running) {
      clearInterval(this.watch);

      this.setState(prevState => ({
        running: false,
        zero: false,
        times: {
          minutes: prevState.times.minutes,
          seconds: prevState.times.seconds,
          miliseconds: prevState.times.miliseconds,
          id: prevState.times.id
        },
        list: prevState.list,
        activeBtn: "stop"
      }));
    }
  }
  handleAdd() {
    if (!this.state.running && !this.state.zero) {
      this.setState(prevState => ({
        running: false,
        zero: false,
        times: {
          minutes: prevState.times.minutes,
          seconds: prevState.times.seconds,
          miliseconds: prevState.times.miliseconds,
          id: prevState.times.id + 1
        },
        list: [...prevState.list, prevState.times],
        activeBtn: "add"
      }));
    }
  }
  handleClean() {
    this.setState(prevState => ({
      running: prevState.running,
      zero: false,
      times: {
        minutes: prevState.times.minutes,
        seconds: prevState.times.seconds,
        miliseconds: prevState.times.miliseconds,
        id: prevState.times.id
      },
      list: [],
      activeBtn: "clean"
    }));
  }

  render() {
    const { miliseconds, seconds, minutes } = this.state.times;
    return (
      <div className="container d-flex justify-content-around flex-column vh-100">
        <div className="buttons d-flex justify-content-center">
          <Start
            click={this.handleStart.bind(this)}
            name="start"
            active={this.state.activeBtn}
          />
          <Stop
            click={this.handleStop.bind(this)}
            name="stop"
            active={this.state.activeBtn}
          />
          <Zero
            click={this.handleZero.bind(this)}
            name="zero"
            active={this.state.activeBtn}
          />
          <Add
            click={this.handleAdd.bind(this)}
            name="add"
            active={this.state.activeBtn}
          />
          <Clean
            click={this.handleClean.bind(this)}
            name="clean"
            active={this.state.activeBtn}
          />
        </div>
        <div className="time text-center">
          <Time miliseconds={miliseconds} seconds={seconds} minutes={minutes} />
        </div>
        <ListItems list={this.state.list} />
      </div>
    );
  }
}

export default App;
