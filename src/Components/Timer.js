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

    timeDisplay = (timerStart, timerLength) => {
        return this.getHoursAndMinutes(timerStart, timerLength) +
            ":" + this.getSeconds(timerStart, timerLength);
    }

    calculatePercent = (timerStart, timerLength) => {
        let diff = Date.now() - timerStart;
        let timeFull = timerLength - diff;
        return 100 - 100 * (diff / timeFull);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    calculateMessage(percentDone) {

    }

    render() {
        const {
            timerLength,
            timerStart
        } = this.props;
        var message = this.calculateMessage(this.calculatePercent(timerLength, timerStart));
        return (

            <div className="timer" style={{ verticalAlign: "center" }}>

                <Progress type="circle"
                    percent={this.calculatePercent(timerStart, timerLength)}
                    format={() => this.timeDisplay(timerStart, timerLength)}
                    width={200}
                />


            </div>
        );
    }
}

export default Timer