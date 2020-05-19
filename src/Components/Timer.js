import React, { Component } from 'react';
import './Timer.css';
import { Progress } from 'antd';
import "antd/dist/antd.css";

class Timer extends Component {


    //gives the difference between timer in the format: "(Hours):(Minutes)"
    getHoursAndMinutes = (timerStart, timerLength, stop) => {
        let now = Date.now();
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
        // console.log("timer start: " + timerStart
        //     + "\ntimer length: " + timerLength
        //     + "\nnow: " + now
        //     + "\nstop: " + stop
        //     + "\nretString: " + retString);
        return retString;
    };

    getSeconds = (timerStart, timerLength, stop) => {
        let now = Date.now();
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
        // console.log("timer start: " + timerStart
        //     + "\ntimer length: " + timerLength
        //     + "\nnow: " + now
        //     + "\nstop: " + stop
        //     + "\nsec: " + sec);
        return sec + "";
    }

    timeDisplay = (timerStart, timerLength, stop) => {
        return this.getHoursAndMinutes(timerStart, timerLength, stop) +
            ":" + this.getSeconds(timerStart, timerLength, stop);
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
        const {
            stop,
            timerLength,
            timerStart,
        } = this.props;
        return (

            <div className="timer" style={{ verticalAlign: "center" }}>

                <Progress type="circle"
                    percent={this.calculatePercent(timerStart, timerLength, stop)}
                    format={() => this.timeDisplay(timerStart, timerLength, stop)}
                    width={200}
                />
            </div>
        );
    }
}

export default Timer