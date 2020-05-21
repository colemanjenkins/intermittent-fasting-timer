import React from 'react';
import './TimerControls.css';
import { InputNumber, Button, Radio } from 'antd';


class TimerControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            ms: 0,
            custom: false,
        }
    }

    handleHourInput = (e) => {
        console.log("e.target.value: " + e)
        this.setState(prevState => ({
            hours: e,
            ms: (e * 3600000)
        }));
    }

    handleMinuteInput = (e) => {
        this.setState(prevState => ({
            minutes: e,
            ms: (e * 60000)
        }));
    }

    handleSecondInput = (e) => {
        this.setState(prevState => ({
            seconds: e,
            ms: (e * 1000)
        }));
    }

    calculateTotalTime = (st) => {
        return st.seconds * 1000 + st.minutes * 60000 + st.hours * 3600000;
    }

    handleSelect = (event) => {
        let value = event.target.value;
        if (value === "16-8") {
            this.setState({
                custom: false,
                hours: 16,
                minutes: 0,
                seconds: 0
            });
        } else if (value === "18-6") {
            this.setState({
                custom: false,
                hours: 18,
                minutes: 0,
                seconds: 0
            });
        } else { //value === "custom"
            this.setState({
                custom: true
            });
        }
    }

    render() {
        let options;
        if (this.state.custom) {
            options =
                <div className="Table">
                    <ul id="horizontal-list">
                        <li>
                            <label>Hours</label><br />
                            <InputNumber
                                min={0}
                                max={99}
                                value={this.state.hours}
                                onChange={this.handleHourInput}
                                size='large'
                            />
                        </li>
                        <li>
                            <label>Mins</label><br />
                            <InputNumber
                                min={0}
                                max={59}
                                value={this.state.minutes}
                                onChange={this.handleMinuteInput}
                                size='large'
                            />
                        </li>
                        <li>
                            <label>Secs</label><br />
                            <InputNumber
                                min={0}
                                max={59}
                                value={this.state.seconds}
                                onChange={this.handleSecondInput}
                                size='large'
                            />
                        </li>
                    </ul>
                </div>
        } else {
            options = null;
        }

        return (
            <div className="Controls">
                <div className="buttons">
                    <h2 style={{ marginLeft: 40 }}>Set Timer</h2>
                    <div className="StartButton">
                        <Button type="submit"
                            onClick={() => this.props.updatePlannedTime(this.calculateTotalTime(this.state))}
                            type="primary">Start Timer</Button>
                    </div>
                    <div className="GiveUp">
                        <Button type="submit"
                            onClick={() => { this.props.newFailed(); this.props.updatePlannedTime(0) }}
                            type="primary" danger>I failed :(</Button>
                    </div>
                </div>
                <div>

                </div>
                <Radio.Group onChange={this.handleSelect} defaultValue="16:8" className="select">
                    <Radio.Button value="16-8">16:8</Radio.Button>
                    <Radio.Button value="18-6">18:6</Radio.Button>
                    <Radio.Button value="custom">Custom</Radio.Button>
                </Radio.Group>
                {options}



            </div>
        );
    }
}

export default TimerControls