import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer.js';
import History from './Components/History.js';
import Records from './Components/Records.js';
import TimerControls from './Components/TimerControls.js';
import './Components/TimerControls.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      fasts: [
        {
          startDate: 1589836641396,
          endDate: 1589836650000,
          actualTime: 9000,
          plannedTime: 9000,
          passed: true,
          id: 0,
        },
        {
          startDate: 1289836641396,
          endDate: 1289836680000,
          actualTime: 20000,
          plannedTime: 39000,
          passed: false,
          id: 1,
        }
      ],
      timerTime: 18 * 60 * 60 * 1000,
      timerStart: 1589900551026 + 20 * 60 * 60 * 1000,
    }
    this.updatePlannedTime = this.updatePlannedTime.bind(this);
    this.newSuccess = this.newSuccess.bind(this);
    this.newFailed = this.newFailed.bind(this);
  }

  updatePlannedTime(msTime) {
    this.setState({
      timerTime: msTime
    })
    console.log("timerTime: " + this.state.timerTime)
  }

  newSuccess() {
    const successFast = {
      startDate: (Date.now() - this.state.timerTimer),
      endDate: Date.now(),
      actualTime: this.state.timerTime,
      plannedTime: this.state.timerTime,
      passed: false
    }
    const newFastList = [...this.state.fasts, successFast]
    this.setState({
      fasts: newFastList,
      timerTime: 0,
      timerStart: 0
    })
  }
  newFailed() {
    const failedFast = {
      startDate: (Date.now() - this.state.timerTimer),
      endDate: Date.now(),
      actualTime: 0,
      plannedTime: this.state.timerTime,
      passed: false
    }
    const newFastList = [...this.state.fasts, failedFast]
    this.setState({
      fasts: newFastList,
      timerTime: 0,
      timerStart: 0
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="dummyHeader">Intermittent Fasting Tracker!</h1>
        <div className="grid">
          <TimerControls updatePlannedTime={this.updatePlannedTime} />
          <Timer timerLength={this.state.timerTime} timerStart={this.state.timerStart} />
          <History fasts={this.state.fasts} />
          <Records />
        </div>

      </div>
    );
  }
}

export default App;