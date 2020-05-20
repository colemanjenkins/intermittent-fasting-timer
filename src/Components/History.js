import React, { Component } from 'react';
import './History.css';
import { isEmpty } from "lodash";

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showFastID: [],
        }

        this.timeStamp = this.timeStamp.bind(this);

        this.handleExpand = this.handleExpand.bind(this);
        this.handleUnexpand = this.handleUnexpand.bind(this);
    }

    /** timeStamp
     * parses a date represented as ms into a string with the format May 18, 2020 (short) OR May 18, 2020 at 2:53:32 PM (long)
     * 
     * @param time the date represented as ms
     * @param long whether or not the resulting date should be represented as a short string (doesn't include time) or long
     * string (includes time up to the second)
     * 
     * @return the date as represented by a string, either short or long
     */
    timeStamp = (time, long) => {
        let months = ["January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];
        let output = '';
        let date = new Date(time);

        output += months[date.getMonth()] + ' ';
        output += date.getDate() + ', ';
        output += date.getFullYear();

        if (long) {
            output += ' at ';

            let hours = date.getHours();
            let amOrPm = "AM"
            if (hours > 12 && hours < 24) {
                hours -= 12;
                amOrPm = "PM";
            } else if (hours === 24) {
                hours = 12
                amOrPm = "AM"
            }

            output += hours + ':';

            let minutes = date.getMinutes();
            let minOutput = '' + minutes;

            if (minutes < 10)
                minOutput = "0" + minutes;

            output += minOutput + ":";

            let seconds = date.getSeconds();
            let secOutput = '' + seconds;

            if (seconds < 10)
                secOutput = "0" + seconds;

            output += secOutput + " " + amOrPm;
        }

        return output;

    }

    handleExpand = (id) => {
        if (isEmpty(this.state.showFastID)) {
            this.setState({
                showFastID: [id],
            })
        } else {
            this.setState({
                showFastID: [...this.state.showFastID, id],
            })
        }

    }

    handleUnexpand = (id) => {
        let newShowFastID = this.state.showFastID.filter(fast => fast !== id);
        this.setState({
            showFastID: newShowFastID,
        })
    }

    render() {
        return (
            <div className="history">

                <div className="sectionHeader">History</div>

                {/* If fasts is empty */}
                {isEmpty(this.props.fasts) &&
                    <div className="emptyMessage">
                        No fasts yet. Select a template fast or create a custom fast to start!
                    </div>
                }


                <div className="topLevel">
                    {/* If fasts is not empty */}
                    {!isEmpty(this.props.fasts) &&
                        <div className="historyBody">
                            {this.props.fasts.map(fast => {
                                let startShort = this.timeStamp(fast.startDate, false)
                                let startLong = this.timeStamp(fast.startDate, true)
                                let endLong = this.timeStamp(fast.endDate, true)

                                let plannedTimes = this.props.parseTime(fast.plannedTime);
                                let plannedHours = plannedTimes[0];
                                let plannedMinutes = plannedTimes[1];
                                let plannedSeconds = plannedTimes[2];

                                let actualTimes = this.props.parseTime(fast.actualTime);
                                let actualHours = actualTimes[0];
                                let actualMinutes = actualTimes[1];
                                let actualSeconds = actualTimes[2];

                                return (
                                    <div>
                                        {!this.state.showFastID.includes(fast.id) &&
                                            <button type="button" className="button" onClick={() => this.handleExpand(fast.id)}>></button>
                                        }
                                        {this.state.showFastID.includes(fast.id) &&
                                            <button type="button" className="button" onClick={() => this.handleUnexpand(fast.id)}>v</button>
                                        }
                                        {" "}

                                        {startShort}{" => "}{" "}
                                        {fast.passed &&
                                            <p style={{ color: 'green', display: "inline" }}>PASS</p>
                                        }
                                        {!fast.passed &&
                                            <p style={{ color: 'red', display: "inline" }}>FAIL</p>
                                        }

                                        {this.state.showFastID.includes(fast.id) &&
                                            <div className="expandedView">
                                                Start: {startLong}<br />
                                                End: {endLong} <br />
                                                Planned Time: {plannedHours} h, {plannedMinutes} m, {plannedSeconds} s <br />
                                                Actual Time: {actualHours} h, {actualMinutes} m, {actualSeconds} s <br />
                                                Status: {fast.status}
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>

            </div>
        );
    }
}

export default History