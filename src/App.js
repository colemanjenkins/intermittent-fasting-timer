import React, { Component } from 'react';

import './App.css';
import Timer from './Components/Timer.js';
import History from './Components/History.js';
import Records from './Components/Records.js';
import TimerControls from './Components/TimerControls.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js'
import './Components/TimerControls.css';
import Confetti from 'react-confetti';

const failedFastsMessages = [
  'Some room for improvement!',
  'You got this next time!',
  'Failure is an inevitable part of success!',
  'Practice makes permanent!',
  'If you sleep, you will not feel hungry ;) ',
  'Why eat when you can develop a timer app',
  'Better luck next time!',
  'Hunger is just a need',
  "There's always next time!",
  'Oof',
  "Nobody's perfect!"
];

const successFastsMessages = [
  'Good job!',
  'Health guru!',
  'Nice!',
  'You did great!',
  'The journey? Easy.',
  'Keep it up!',
  'Why stop here?',
  'Food is just materialistic want anyways',
  "Food? That's so 2019",
  'Determination is my food',
  'gg wp',
  "You're perfect"
];

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      fasts: [],
      timerTime: 18 * 60 * 60 * 1000,
      timerStart: 0,
      currentTime: Date.now(),
      stop: true,
      altStop: true,
      confetti: false,
      recycle: true,
      stopTime: 0,
    }
    this.updatePlannedTime = this.updatePlannedTime.bind(this);
    this.newSuccess = this.newSuccess.bind(this);
    this.newFailed = this.newFailed.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.editNote = this.editNote.bind(this);
    this.removeFast = this.removeFast.bind(this);
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
    if (!this.state.altStop && (this.state.currentTime - this.state.stopTime >= 3000) && this.state.recycle) {
      this.stopRecycle();
    }
  }

  startConfetti = () => {
    this.setState({
      confetti: true
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlannedTime = (msTime) => {
    if (msTime === 0) {
      this.setState({
        stop: true,
      })
    } else {
      this.setState({
        timerTime: msTime,
        timerStart: Date.now(),
        stop: false,
        altStop: true,
      });
    }
  }

  newSuccess = () => {
    let newID = 0;
    if (this.state.fasts.length !== 0)
      newID = this.state.fasts[this.state.fasts.length - 1].id + 1;
    const successFast = {
      startDate: this.state.timerStart,
      endDate: this.state.currentTime,
      actualTime: this.state.timerTime,
      plannedTime: this.state.timerTime,
      passed: true,
      id: newID,
      status: successFastsMessages[Math.floor(Math.random() * successFastsMessages.length)],
      note: '',
    }
    const newFastList = [...this.state.fasts, successFast]
    console.log(this.state.timerTime)
    this.setState(prevState => ({
      fasts: newFastList,
      timerStart: prevState.currentTime,
      stop: true,
      altStop: false,
      confetti: true,
      recycle: true,
      stopTime: Date.now(),
    }));
  }

  newFailed = () => {
    if (!this.state.stop) {
      let newID = 0;
      if (this.state.fasts.length !== 0)
        newID = this.state.fasts[this.state.fasts.length - 1].id + 1;
      const failedFast = {
        startDate: this.state.timerStart,
        endDate: this.state.currentTime,
        actualTime: this.state.currentTime - this.state.timerStart,
        plannedTime: this.state.timerTime,
        passed: false,
        id: newID,
        status: failedFastsMessages[Math.floor(Math.random() * failedFastsMessages.length)],
        note: '',
      }
      const newFastList = [...this.state.fasts, failedFast]
      console.log(this.state.timerTime)
      this.setState(prevState => ({
        fasts: newFastList,
        timerStart: prevState.currentTime,
        stop: true,
        altStop: false,
      }));
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

  editNote(newText, key) {
    const list = this.state.fasts
    list.map(fast => {
      if (fast.id === key) {
        fast.note = newText
      }
    });
    this.setState({
      fasts: list
    })
  }

  removeFast(key) {
    const list = this.state.fasts.filter(fast => fast.id !== key)
    this.setState({
      fasts: list
    })
  }

  stopRecycle = () => {
    this.setState({
      recycle: false
    })
  }

  calculatePercent = (timerStart, timerLength, stop) => {
    if (stop)
      return 100;
    let diff = Date.now() - timerStart;
    let pct = 100 - 100 * (diff / timerLength);
    if (pct < 0)
      return 0;
    return pct;
  }

  render() {
    return (

      <div className="App" onClick={() => this.setState({ recycle: false })}>
        <div className="grid">
          <Header />
          {this.state.confetti &&
            <Confetti
              recycle={this.state.recycle}
              className="confetti"
              width={this.props.windowWidth}
            />
          }

          <TimerControls
            updatePlannedTime={this.updatePlannedTime}
            newFailed={this.newFailed} />
          <Timer stop={this.state.stop}
            altStop={this.state.altStop}
            timerLength={this.state.timerTime}
            timerStart={this.state.timerStart}
            now={this.state.currentTime}
            confetti={this.state.confetti} />


          <Records
            fasts={this.state.fasts}
            parseTime={this.parseTime} />

        </div>
        <History
          fasts={this.state.fasts}
          parseTime={this.parseTime}
          editNote={this.editNote}
          removeFast={this.removeFast}
        />

      </div>
    );

  }
}

export default App;