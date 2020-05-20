import React, { Component } from 'react';
import './Records.css';
import { Progress } from 'antd';

class Records extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    findLongestFast(fasts) {
        var time = 0;
        fasts.map(fast => {
            if (fast.actualTime > time) {
                time = fast.actualTime
            }
        })
        return time;
    }
    findShortestFast(fasts) {
        var time = fasts[0].actualTime;
        fasts.map(fast => {
            if (fast.actualTime < time) {
                time = fast.actualTime
            }
        })
        return time;
    }
    passRate(fasts) {
        var pass = 0;
        var fail = 0;
        fasts.map(fast => {
            if (fast.passed) {
                pass++;
            } else {
                fail++;
            }
        })
        return pass / (pass + fail);
    }

    render() {

        const list = this.props.fasts;
        if (list.length > 0) {
            const longTime = this.props.parseTime(this.findLongestFast(list));
            const shortTime = this.props.parseTime(this.findShortestFast(list));
            const passRate = this.passRate(list) * 100;
            var message = "You're doing great!";
            if (passRate < .5) {
                message = 'Try setting shorter goals and work your way up!'
            }
            return (
                <div className="records">
                    <h2>Records</h2>
                    <p>Longest Fast: {longTime[0]}:{longTime[1]}:{longTime[2]}</p>
                    <p>Shortest Fast: {shortTime[0]}:{shortTime[1]}:{shortTime[2]}</p>
                    <b>Pass Rate: {Math.trunc(passRate)}%</b>
                    <Progress percent={passRate} showInfo={false} trailColor="red" />
                    <p>{message}</p>
                </div>
            );
        }
    }
}

export default Records