import React from 'react';
import './App.css';
import Timer from './Components/Timer.js';
import History from './Components/History.js';
import Records from './Components/Records.js';
import TimerControls from './Components/TimerControls.js';

function App() {
  return (
    <div className="App">
      <h1 className="dummyHeader">Intermittent Fasting Tracker!</h1>
      <div className="grid">
        <TimerControls />
        <Timer />
        <History />
        <Records />
        {/* <div className="timerControls">timerControls</div>
        <div className="timer">timer</div>
        <div className="history">history</div>
        <div className="records">records</div> */}
      </div>
    </div>
  );
}

export default App;