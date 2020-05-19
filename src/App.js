import React from 'react';
import './App.css';
import Timer from './Components/Timer.js';
import History from './Components/History.js';
import Records from './Components/Records.js';
import TimerControls from './Components/TimerControls.js';
import './Components/TimerControls.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      fasts: [
        {
          startDate: 10000,
          endDate: 10001,
          actualTime: 0,
          plannedTime: 0,
          passed: true
        }
      ],
      timerTime: 0,
      timerStart: 0,
    }
    this.updatePlannedTime = this.updatePlannedTime.bind(this);
  }

  updatePlannedTime(msTime) {
    this.setState({
      timerTime: msTime
    })
  }

  render() {
    return (
      <div className="App" >
        <h1 className="dummyHeader">Intermittent Fasting Tracker!</h1>

        <TimerControls
          updatePlannedTime={this.updatePlannedTime}
        ></TimerControls>
      </div>
    );
  }
}

export default App;