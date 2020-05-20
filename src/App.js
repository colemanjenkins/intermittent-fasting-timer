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
        },
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
        },
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
      timerTime: 18 * 60 * 60 * 1000,
      timerStart: 0,
      currentTime: Date.now(),
      stop: true
    }
    this.updatePlannedTime = this.updatePlannedTime.bind(this);
    this.newSuccess = this.newSuccess.bind(this);
    this.newFailed = this.newFailed.bind(this);
    this.parseTime = this.parseTime.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ currentTime: Date.now() }), 20);
  }

  componentDidUpdate() {
    if (!this.state.stop &&
      ((this.state.timerTime + this.state.timerStart <= this.state.currentTime + 10)
        && (this.state.timerTime + this.state.timerStart >= this.state.currentTime - 10))) {
      this.newSuccess();
    }
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
    }
  }

  newSuccess() {
    const successFast = {
      startDate: this.state.timerStart,
      endDate: this.state.currentTime,
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
    if (!this.state.stop) {
      const failedFast = {
        startDate: this.state.timerStart,
        endDate: this.state.currentTime,
        actualTime: this.state.currentTime - this.state.timerStart,
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
  }

  parseTime = (time) => {
    let totalInSeconds = time / 1000;

    let hours = Math.floor(totalInSeconds / 3600);
    let remaining = totalInSeconds % 3600;

    let minutes = Math.floor(remaining / 60);
    let seconds = remaining % 60;

    return [hours, minutes, seconds];
  }

  render() {
    return (
      <div className="App">
        {/* <PageHeader
          title="Intermittent Fasting Tracker!" /> */}
        <h1 className="dummyHeader">Intermittent Fasting Tracker!</h1>
        <div className="grid">
          <TimerControls
            updatePlannedTime={this.updatePlannedTime}
            newFailed={this.newFailed} />
          <Timer stop={this.state.stop}
            timerLength={this.state.timerTime}
            timerStart={this.state.timerStart}
            newSuccess={this.newSuccess}
            now={this.state.currentTime} />
          <History
            fasts={this.state.fasts}
            parseTime={this.parseTime} />
          <Records
            fasts={this.state.fasts}
            parseTime={this.parseTime} />
        </div>

      </div>
    );
  }
}

export default App;