import React, { Component } from 'react';
import './Timer.css';
import { Progress } from 'antd';
import "antd/dist/antd.css";
import Message from './Message.js';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'You got this!',
                'WILLPOWER!!',
                'What is hunger anyways?',
            ],
            oldMessageID: 0,
            messageID: 0,
            percentGoal: 90,

        }

        // this.handleMsg = this.handleMsg.bind(this);
    }


    //gives the difference between timer in the format: "(Hours):(Minutes)"
    getHoursAndMinutes = (timerStart, timerLength, stop) => {
        let diff = Date.now() - timerStart;
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

    getSeconds = (timerStart, timerLength, stop) => {
        let diff = Date.now() - timerStart;
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

    // handleMsg = (percent, num) =>{
    //     let newNum = num;
    //     let goal = this.state.percentGoal;
        
    //     if (percent < goal && percent !== 0 && percent !== 100) {
    //         // console.log("percent < this.state.percentGoal: " + (percent < this.state.percentGoal))
    //         newNum = Math.floor(Math.random() * this.state.messages.length);
    //         while (newNum === num) {
    //             newNum = Math.floor(Math.random() * this.state.messages.length);
    //         }
    //         this.setState({
    //             percentGoal: goal - 10,
    //             messageID: newNum,
    //         });
    //     }
        
    //     // return newNum;
    // }

    render() {
        const {
            stop,
            timerLength,
            timerStart,
        } = this.props;

        // let percentGoal = 90;
        let percent = this.calculatePercent(timerStart, timerLength, stop);
        // let percentGoal = Math.floor(percent/10)*10;
        // console.log("PERCENT: " + percent)

        // let num = 0;
        // if (percent > 90) {
        //     num = 0;
        // } else {
        //     num = this.handleMsg(percent, num);
        // }
        // let num = this.handleMsg(percent, this.state.messageID);
        // console.log("num: " + num)
        // const pct = this.calculatePercent(timerStart, timerLength, stop);
        // const msgs = ['apple', 'banana', 'coconut'];
        // var message = '';
        // if (pct < percentGoal && pct !== 0 && pct !== 100) {
        //     message = this.state.messages[Math.floor(Math.random() * Math.floor(this.state.messages.length))];
        //     percentGoal -= 10;
        // }

        return (
            <div className="timer" style={{ verticalAlign: "center" }}>

                <Progress type="circle"
                    percent={this.calculatePercent(timerStart, timerLength, stop)}
                    format={() => this.timeDisplay(timerStart, timerLength, stop)}
                    width={200}
                    style={{ marginLeft:100 }}
                />

                {/* <br/><br/>
                <div style={{ display: "flex", justifyContent: "center" }}>{this.state.messages[this.state.messageID]}</div> */}
                <Message stop={stop} timerLength={timerLength} timerStart={timerStart} />
            </div>
        );
    }
}

export default Timer