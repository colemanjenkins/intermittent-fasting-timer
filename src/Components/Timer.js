import React, { Component } from 'react';
import './Timer.css';
import { Progress } from 'antd';
// import '/node_modules/antd/dist/antd.css';

class Timer extends Component {

    render() {
        return(
            <div className="timer">
                <Progress type="circle" percent={50} />
                <div>
                    <Progress type="circle" percent={75} />
                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                </div>
            </div>
        );
    }
}

export default Timer