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

      failedFastsMessages: [
        'Some room for improvement!',
        'You got this next time!',
        'Failure is an inevitable part of success!'
      ],

      successFastsMessages: [
          'Good job!',
          'Health guru!',
          'Nice!'
      ],

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
      timerTime: 18 * 60 * 60 * 1000,
      timerStart: 1589900551026,
      currentTime: Date.now()
    }
    this.updatePlannedTime = this.updatePlannedTime.bind(this);
    this.newSuccess = this.newSuccess.bind(this);
    this.newFailed = this.newFailed.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ currentTime: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlannedTime(msTime) {
    this.setState({
      timerTime: msTime,
      timerStart: Date.now()
    })
    console.log("timerTime: " + this.state.timerTime)
  }

  //this should be called when the timer gets to zero
  newSuccess() {
    const successFast = {
      startDate: (Date.now() - this.state.timerTimer),
      endDate: Date.now(),
      actualTime: this.state.timerTime,
      plannedTime: this.state.timerTime,
      passed: false,
      id: this.state.fasts[this.state.fasts.length-1].id + 1,
      status: this.state.successFastsMessages[Math.floor(Math.random() * this.state.successFastsMessages.length)],
    }
    const newFastList = [...this.state.fasts, successFast]
    console.log(this.state.timerTime)
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
      passed: false,
      id: this.state.fasts[this.state.fasts.length-1].id + 1,
      status: this.state.failedFastsMessages[Math.floor(Math.random() * this.state.failedFastsMessages.length)],
    }
    const newFastList = [...this.state.fasts, failedFast]
    console.log(this.state.timerTime)
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
          <Records fasts={this.state.fasts} />
        </div>

      </div>
    );
  }
}

export default App;