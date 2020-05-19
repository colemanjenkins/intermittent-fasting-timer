import React, { Component } from 'react';
import './History.css';
import { isEmpty } from "lodash";

class History extends React.Component {

    constructor(props) {
        super(props);

        this.timeStamp = this.timeStamp.bind(this);
    }

    timeStamp = (time) => {
        let months = ["January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];
        let output = '';
        let date = new Date(time);

        output += months[date.getMonth()] + ' ';
        output += date.getDate() + ', ';
        output += date.getFullYear() + ' at ';

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

        output += minOutput + " " + amOrPm;

        return output;

    }

    render() {
        return(
            <div className="history">
                <div className="sectionHeader">History</div>

                {isEmpty(this.props.fasts) &&
                <div className="emptyMessage">
                    No fasts yet. Select a template fast or create a custom fast to start!
                </div>
                }

                {!isEmpty(this.props.fasts) &&

                <div className="historyBody">
                    {this.props.fasts.map( fast => {
                        let start = this.timeStamp(fast.startDate)
                        return (
                            <div>
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
        );
    }
}

export default History