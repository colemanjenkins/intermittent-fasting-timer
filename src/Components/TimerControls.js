import React from 'react';
import './TimerControls.css';
import { InputNumber, Button } from 'antd';


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
            ms: (prevState.ms + e * 3600000)
        }));
    }
    handleMinuteInput(e) {
        this.setState(prevState => ({
            minutes: e,
            ms: (prevState.ms + e * 60000)
        }));
    }
    handleSecondInput(e) {
        this.setState(prevState => ({
            seconds: e,
            ms: (prevState.ms + e * 1000)
        }));
    }
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
                    <p>Hours</p>
                    <p>Mins</p>
                    <p>Secs</p>
                </div>
                <div className="Table">
                    <ul id="horizontal-list">
                        <li>
                            <InputNumber
                                min={0}
                                max={99}
                                value={this.state.hours}
                                onChange={this.handleHourInput}
                            />
                        </li>
                        <li>
                            <InputNumber
                                min={0}
                                max={59}
                                value={this.state.minutes}
                                onChange={this.handleMinuteInput}
                            />
                        </li>
                        <li>
                            <InputNumber
                                min={0}
                                max={59}
                                value={this.state.seconds}
                                onChange={this.handleSecondInput}
                            />
                        </li>
                    </ul>
                </div>
                <div className="StartButton">
                    <Button type="submit"
                        onClick={() => { this.props.updatePlannedTime(this.state.ms); this.clearTime() }}
                    >Start Timer</Button>
                </div>
                <div className="GiveUp">
                    <Button type="submit" onClick={() => this.props.newFailed}>I failed :(</Button>
                </div>

            </div>
        );
    }
}

export default TimerControls