import React from 'react';
import './TimerControls.css';
import { InputNumber, Button, Form, Input } from 'antd';


class TimerControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            ms: 0
        }
        this.handleHourInput = this.handleHourInput.bind(this);
        this.handleMinuteInput = this.handleMinuteInput.bind(this);
        this.handleSecondInput = this.handleSecondInput.bind(this);
    }

    handleHourInput(e) {
        console.log("e.target.value: " + e)
        this.setState(prevState => ({
            hours: e,
            ms: (e * 3600000)
        }));
    }
    handleMinuteInput(e) {
        this.setState(prevState => ({
            minutes: e,
            ms: (e * 60000)
        }));
    }
    handleSecondInput(e) {
        this.setState(prevState => ({
            seconds: e,
            ms: (e * 1000)
        }));
    }
    calculateTotalTime = (st) => {
        return st.seconds * 1000 + st.minutes * 60000 + st.hours * 3600000;
    }
    //not needed unless we want inputs to be cleared to zero
    clearTime() {
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            ms: 0
        })
    }

    render() {
        return (
            <div className="Controls">
                <div className="InputLabels">
                    <b>Hours</b>
                    <b>Mins</b>
                    <b>Secs</b>
                </div>
                <div className="Inputs">
                    <Form id='inputForm'>
                        <InputNumber
                            min={0}
                            max={47}
                            value={this.state.hours}
                            onChange={this.handleHourInput}
                            size='large'
                        />
                        <InputNumber
                            min={0}
                            max={59}
                            value={this.state.minutes}
                            onChange={this.handleMinuteInput}
                            size='large'
                            id='mins'
                        />
                        <InputNumber
                            min={0}
                            max={59}
                            value={this.state.seconds}
                            onChange={this.handleSecondInput}
                            size='large'
                            id='secs'
                        />
                    </Form>
                </div>
                <div className="StartButton">
                    <Button type="submit"
                        onClick={() => this.props.updatePlannedTime(this.calculateTotalTime(this.state))}
                    >Start Timer</Button>
                </div>
                <div className="GiveUp">
                    <Button type="submit"
                        onClick={() => { this.props.newFailed(); this.props.updatePlannedTime(0) }}
                    >I failed :(</Button>
                </div>

            </div>
        );
    }
}

export default TimerControls