import React, { Component } from 'react';
import './HistoryBody.css';
import { isEmpty } from "lodash";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class HistoryBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFastID: [],
        }
    }

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
            <div className="historyBody" style={{ display: "flex", flexWrap: "wrap" }}>
                
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
                        <div className="card"> 
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className="heading">
                                    <div className="topLevelInfo">

                                        {startShort}{" - "}{" "}
                                        {fast.passed &&
                                            <p style={{ color: 'green', display: "inline" }}>PASS</p>
                                        }
                                        {!fast.passed &&
                                            <p style={{ color: 'red', display: "inline" }}>FAIL</p>
                                        }
                                    </div>
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    <div className="moreInfo">
                                        {/* {this.state.showFastID.includes(fast.id) && */}
                                            <div className="expandedView">
                                                <li><p className="infoLabel">Start: </p>{startLong}</li>
                                                <li><p className="infoLabel">End: </p>{endLong}</li>
                                                <li><p className="infoLabel">Planned Time: </p>{plannedHours} h, {plannedMinutes} m, {plannedSeconds} s</li>
                                                <li><p className="infoLabel">Actual Time: </p>{actualHours} h, {actualMinutes} m, {actualSeconds} s </li>
                                                <li><p className="infoLabel">Status: </p>{fast.status}</li>
                                            </div>
                                            {/* } */}
                                        </div>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default HistoryBody