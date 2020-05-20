import React, { Component } from 'react';
import { PageHeader } from 'antd';

import './App.css';
import Timer from './Components/Timer.js';
import History from './Components/History.js';
import Records from './Components/Records.js';
import TimerControls from './Components/TimerControls.js';
import './Components/TimerControls.css';

const failedFastsMessages = [
  'Some room for improvement!',
  'You got this next time!',
  'Failure is an inevitable part of success!'
];

const successFastsMessages = [
  'Good job!',
  'Health guru!',
  'Nice!'
];

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
          status: 'Good job!',
          id: 0,
        },
        {
          startDate: 1289836641396,
          endDate: 1289836680000,
          actualTime: 20000,
          plannedTime: 39000,
          passed: false,
          status: 'Some room for improvement!',
          id: 1,
        }
      ],
      timerTime: 17 * 60 * 60 * 1000,
      timerStart: 0,
      currentTime: Date.now(),
      stop: true
    }
    this.updatePlannedTime = this.updatePlannedTime.bind(this);
    this.newSuccess = this.newSuccess.bind(this);
    this.newFailed = this.newFailed.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ currentTime: Date.now() }), 1000);
    if (this.state.timerTime + this.state.timerStart <= this.state.currentTime)
      this.newSuccess();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlannedTime(msTime) {
    if (msTime === 0) {
      this.setState({
        stop: true,
      })
    } else {
      this.setState({
        timerTime: msTime,
        timerStart: Date.now(),
        stop: false
      });
      console.log("timerTime: " + this.state.timerTime);
    }
  }

  //this should be called when the timer gets to zero
  newSuccess() {
    const successFast = {
      startDate: (Date.now() - this.state.timerTime),
      endDate: Date.now(),
      actualTime: this.state.timerTime,
      plannedTime: this.state.timerTime,
      passed: true,
      id: this.state.fasts[this.state.fasts.length - 1].id + 1,
      status: successFastsMessages[Math.floor(Math.random() * successFastsMessages.length)],
    }
    const newFastList = [...this.state.fasts, successFast]
    console.log(this.state.timerTime)
    this.setState({
      fasts: newFastList,
      timerStart: 0,
      stop: true,
    })
  }

  newFailed() {
    const failedFast = {
      startDate: (Date.now() - this.state.timerTime),
      endDate: Date.now(),
      actualTime: 0,
      plannedTime: this.state.timerTime,
      passed: false,
      id: this.state.fasts[this.state.fasts.length - 1].id + 1,
      status: failedFastsMessages[Math.floor(Math.random() * failedFastsMessages.length)],
    }
    const newFastList = [...this.state.fasts, failedFast]
    console.log(this.state.timerTime)
    this.setState({
      fasts: newFastList,
      timerStart: 0,
      stop: true,
    })
  }

  render() {
    return (
      <div className="App">
        <PageHeader
          title="Intermittent Fasting Tracker!" />
        <h1 className="dummyHeader">Intermittent Fasting Tracker!</h1>
        <div className="grid">
          <TimerControls updatePlannedTime={this.updatePlannedTime} newFailed={this.newFailed} />
          <Timer stop={this.state.stop} timerLength={this.state.timerTime} timerStart={this.state.timerStart} />
          <History fasts={this.state.fasts} />
          <Records fasts={this.state.fasts} />
        </div>

      </div>
    );
  }
}

export default App;