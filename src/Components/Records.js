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
        // console.log(time)
        fasts.map(fast => {
            if (fast.actualTime > time) {
                time = fast.actualTime
            }
        })
        // console.log("Longest fast: " + time)
        return time;
    }
    findShortestFast(fasts) {
        var time = fasts[0].actualTime;
        // console.log(time)
        fasts.map(fast => {
            if (fast.actualTime < time) {
                time = fast.actualTime
            }
        })
        // console.log("Shortest fast: " + time)
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
        // console.log("passed: " + pass)
        // console.log("failed: " + fail)
        return pass / (pass + fail);
    }

    render() {
        const list = this.props.fasts;
        const passRate = this.passRate(list) * 100;
        var message = "You're doing great!";
        if (passRate < .5) {
            message = 'Try setting shorter goals and work your way up!'
        }
        return (
            <div className="records">
                <h2>Records</h2>
                <p>Longest Fast: {this.findLongestFast(list)}</p>
                <p>Shortest Fast: {this.findShortestFast(list)}</p>
                <b>Pass Rate: {passRate}%</b>
                <Progress percent={passRate} trailColor="red" />
                <p>{message}</p>
            </div>
        );
    }
}

export default Records