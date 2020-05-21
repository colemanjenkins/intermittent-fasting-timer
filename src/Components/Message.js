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
        if (stop)
            return 100;
        let diff = Date.now() - timerStart;
        let pct = 100 - 100 * (diff / timerLength);
        if (pct < 0)
            return 0;
        return pct;
    }

    handleMsg = (percent, num, stop, timerLength) => {
        let newNum = num;
        let goal = this.state.percentGoal;
        let changeMessage = true;

        // if (goal === 90 && percent <= 10) {
        //     changeMessage = false;
        // }

        if (percent < goal && changeMessage && percent !== 0 && percent !== 100 && timerLength >= 10000) {
            newNum = Math.floor(Math.random() * this.state.messages.length);
            while (newNum === num) {
                newNum = Math.floor(Math.random() * this.state.messages.length);
            }
        //    console.log(goal)
        //     if (goal - 10 === 10) {
        //         console.log("happened");
        //         goal = 90;
        //     } else {
        //         goal -= 10;
        //     }


            this.setState({
                percentGoal: goal - 10,
                messageID: newNum
            })
        }
    }

    shouldComponentUpdate(nextState) {
        return this.state.percentGoal !== nextState.percentGoal }

    componentDidUpdate() {
        if (this.state.percentGoal === 0 && 
            this.calculatePercent(this.props.timerStart, this.props.timerLength, this.props.stop) === 100) {
            this.setState({
                percentGoal: 90,
            })
        }
    }

    render() {
        const {
            stop,
            timerLength,
            timerStart,
        } = this.props;
        let percent = this.calculatePercent(timerStart, timerLength, stop);

        this.handleMsg(percent, this.state.messageID, stop, timerLength);
        // console.log("percent: " + percent + " percentGoal: " + this.state.percentGoal);
        // if (percent === 0) {
        //     console.log("percentGoal: " + this.state.percentGoal);
        // }

        return (
            <div className="timer" style={{ verticalAlign: "center" }}>
                <br /><br />
                <div style={{ display: "flex", justifyContent: "center" }}>{this.state.messages[this.state.messageID]}</div>
            </div>
        );
    }

}

export default Message