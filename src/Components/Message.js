import React, { Component } from 'react';
import './Message.css';
import "antd/dist/antd.css";

const messages = [
    'You got this!',
    'WILLPOWER!!',
    'What is hunger anyways?',
    'Keep it up!',
    'gl hf',
    'YOU CAN DO THIS',
    "You're not hungry",
    "Stop thinking about your mom's mac n cheese",
    "Don't do it",
    'I am watching you',
    'Just think how disappointed I will be',
]

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageID: 0,
            percentGoal: 90,
        }
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

    handleMsg = (percent, num, timerLength) => {
        let newNum = num;
        let goal = this.state.percentGoal;
        let changeMessage = true;
        if (percent < goal && changeMessage && percent !== 0 && percent !== 100 && timerLength >= 10000) {
            newNum = Math.floor(Math.random() * messages.length);
            while (newNum === num) {
                newNum = Math.floor(Math.random() * messages.length);
            }
            this.setState({
                percentGoal: goal - 10,
                messageID: newNum
            })
        }
    }

    shouldComponentUpdate(nextState) {
        return this.state.percentGoal !== nextState.percentGoal
    }

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

        this.handleMsg(percent, this.state.messageID, timerLength);

        return (
            <div className="timer">
                <div style={{ display: "flex", justifyContent: "center" }}>{messages[this.state.messageID]}</div>
            </div>
        );
    }

}

export default Message