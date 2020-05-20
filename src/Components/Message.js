import React, { Component } from 'react';
import './Message.css';
import "antd/dist/antd.css";

class Message extends Component {

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

        this.handleMsg = this.handleMsg.bind(this);
    }

    calculatePercent = (timerStart, timerLength, stop) => {
        console.log("timerStart, timerLength, stop: " + timerStart + ' ' + timerLength + ' ' + stop);
        if (stop)
            return 100;
        let diff = Date.now() - timerStart;
        let pct = 100 - 100 * (diff / timerLength);
        if (pct < 0)
            return 0;
        return pct;
    }

    handleMsg = (percent, num) =>{
        let newNum = num;
        let goal = this.state.percentGoal;
        // console.log("percent < this.state.percentGoal: " + percent + ' | '+ this.state.percentGoal + ' ' + (percent < this.state.percentGoal));
        // console.log("handleMsg");
        if (percent < goal && percent !== 0 && percent !== 100) {
            console.log("percent < this.state.percentGoal: " + (percent < this.state.percentGoal))
            newNum = Math.floor(Math.random() * this.state.messages.length);
            while (newNum === num) {
                newNum = Math.floor(Math.random() * this.state.messages.length);
            }
            this.setState({
                percentGoal: goal - 10,
                messageID: newNum,
            });
        }
        
        // return newNum;
    }

    render() {
        const {
            stop,
            timerLength,
            timerStart,
        } = this.props;

        // let percentGoal = 90;
        let percent = this.calculatePercent(timerStart, timerLength, stop);
        console.log("percent: " + percent);
        // let percentGoal = Math.floor(percent/10)*10;
        // console.log("PERCENT: " + percent)

        // let num = 0;
        // if (percent > 90) {
        //     num = 0;
        // } else {
        //     num = this.handleMsg(percent, num);
        // }
        // let num = this.handleMsg(percent, this.state.messageID);

        this.handleMsg(percent, this.state.messageID);

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
                <br/><br/>
                {/* <div>{this.state.messages[num]}</div> */}
                <div style={{ display: "flex", justifyContent: "center" }}>{this.state.messages[this.state.messageID]}</div>
                {/* <div>{message}</div> */}
            </div>
        );
    }

}

export default Message