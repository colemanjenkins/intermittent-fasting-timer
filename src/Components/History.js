import React, { Component } from 'react';
import './History.css';
import { isEmpty } from "lodash";

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showExpand: false
        }

        this.timeStamp = this.timeStamp.bind(this);
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
                    {!isEmpty(this.props.fasts) && !this.state.showExpand &&
                        <div className="historyBody">
                            {this.props.fasts.map(fast => {
                                let start = this.timeStamp(fast.startDate, false)
                                return (
                                    <div>
                                        <button type="button" onClick={() => this.setState({ showExpand: true })}>></button>

                                        {start}{" => "}{" "}
                                        {fast.passed &&
                                            <p style={{ color: 'green', display: "inline" }}>PASS</p>
                                        }
                                        {!fast.passed &&
                                            <p style={{ color: 'red', display: "inline" }}>FAIL</p>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>

                <div className="expandedView">
                    {!isEmpty(this.props.fasts) && this.state.showExpand &&
                        <div className="historyBody">
                            Expanded
                        </div>
                    }
                </div>

            </div>
        );
    }
}

export default History