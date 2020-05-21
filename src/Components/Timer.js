import React, { Component } from 'react';
import './Timer.css';
import { Progress } from 'antd';
import "antd/dist/antd.css";
import Message from './Message.js';

class Timer extends Component {


    //gives the difference between timer in the format: "(Hours):(Minutes)"
    getHoursAndMinutes = (timerStart, timerLength, stop, now) => {
        let diff = now - timerStart;
        let timeFull = timerLength - diff;
        let msInHour = 3600000;
        let msInMinute = 60000;
        let min = (Math.floor(timeFull / msInMinute)) % 60;
        let hours = Math.floor(timeFull / msInHour);
        if (stop) {
            min = (Math.floor(timerLength / msInMinute)) % 60;
            hours = Math.floor(timerLength / msInHour);
        }
        if (min < 0)
            min = 0;
        if (hours < 0)
            hours = 0;
        let retString = hours + ":" + min;
        if (min < 10)
            retString = hours + ":0" + min;
        return retString;
    };

    getSeconds = (timerStart, timerLength, stop, now) => {
        let diff = now - timerStart;
        let timeFull = timerLength - diff;
        let msInSecond = 1000;
        let sec = (Math.floor(timeFull / msInSecond)) % 60;
        if (stop)
            sec = (Math.floor(timerLength / msInSecond)) % 60;
        if (sec < 0)
            sec = 0;
        if (sec < 10)
            return "0" + sec;
        return sec + "";
    }

    timeDisplay = (timerStart, timerLength, stop, now) => {
        return this.getHoursAndMinutes(timerStart, timerLength, stop, now) +
            ":" + this.getSeconds(timerStart, timerLength, stop, now);
    }

    calculatePercent = (timerStart, timerLength, stop, now) => {
        if (stop)
            return 100;
        let diff = now - timerStart;
        let pct = 100 - 100 * (diff / timerLength);
        if (pct < 0)
            return 0;
        return pct;
    }

    displaySecondTimer = (altStop, timerStart, now) => {
        if (!altStop) {
            let timeFull = now - timerStart;
            let msInHour = 3600000;
            let msInMinute = 60000;
            let min = (Math.floor(timeFull / msInMinute)) % 60;
            let hours = Math.floor(timeFull / msInHour);
            if (min < 0)
                min = 0;
            if (hours < 0)
                hours = 0;
            let retString = hours + ":" + min;
            if (min < 10)
                retString = hours + ":0" + min;
            let hr = "hours";
            if (hours === 1)
                hr = "hour";
            return "Time since last fast - " + retString;
        }
        return '';
    }

    render() {
        const {
            stop,
            altStop,
            timerLength,
            timerStart,
            now
        } = this.props;
        
        return (
            <div className="timer" style={{ verticalAlign: "center" }}>

                <Progress type="circle"
                    percent={this.calculatePercent(timerStart, timerLength, stop, now)}
                    format={() => this.timeDisplay(timerStart, timerLength, stop, now)}
                    width={200}
                    style={{ marginLeft: 100 }}
                />
                <div>
                    {this.displaySecondTimer(altStop, timerStart, now)}
                </div>

                <div className="message">
                    <Message stop={stop} timerLength={timerLength} timerStart={timerStart} confetti={this.props.confetti} />
                </div>
            </div>
        );
    }
}

export default Timer