import React, { Component } from 'react';
import './Timer.css';
import { Progress } from 'antd';
import "antd/dist/antd.css";

class Timer extends Component {

    //gives the difference between timer in the format: "(Hours):(Minutes)"
    getHoursAndMinutes = (timerStart, timerLength) => {
        let diff = Date.now() - timerStart;
        let timeFull = timerLength - diff;
        let msInHour = 3600000;
        let msInMinute = 60000;
        let min = (Math.floor(timeFull / msInMinute)) % 60;
        let hours = Math.floor(timeFull / msInHour);
        let retString = hours + ":" + min;
        if (min < 10)
            retString = hours + ":0" + min;
        return retString;
    };

    getSeconds = (timerStart, timerLength) => {
        let diff = Date.now() - timerStart;
        let timeFull = timerLength - diff;
        let msInSecond = 1000;
        let sec = (Math.floor(timeFull / msInSecond)) % 60;
        if (sec < 10)
            return "0" + sec;
        return sec + "";
    }

    render() {
        const {
            timerLength,
            timerStart
        } = this.props;
        return (

            <div className="timer">
                <Progress type="circle" percent={50} />
                <div>

                    <Progress type="circle" percent={75} />
                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                    {this.getHoursAndMinutes(timerStart, timerLength) /*this is "17:55" part of the display*/}
                    :
                    {this.getSeconds(timerStart, timerLength) /*this is "44" part of the display (seconds)*/}
                </div>
            </div>
        );
    }
}

export default Timer