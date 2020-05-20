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

    handleMsg = (percent, num) => {
        let newNum = num;
        let goal = this.state.percentGoal;
        if (percent < goal && percent !== 0 && percent !== 100) {
            newNum = Math.floor(Math.random() * this.state.messages.length);
            while (newNum === num) {
                newNum = Math.floor(Math.random() * this.state.messages.length);
            }
            this.setState({
                percentGoal: goal - 10,
                messageID: newNum,
            });
        }
    }

    render() {
        const {
            stop,
            timerLength,
            timerStart,
        } = this.props;
        let percent = this.calculatePercent(timerStart, timerLength, stop);

        this.handleMsg(percent, this.state.messageID);

        return (
            <div className="timer" style={{ verticalAlign: "center" }}>
                <br /><br />
                {/* <div>{this.state.messages[num]}</div> */}
                <div style={{ display: "flex", justifyContent: "center" }}>{this.state.messages[this.state.messageID]}</div>
                {/* <div>{message}</div> */}
            </div>
        );
    }

}

export default Message