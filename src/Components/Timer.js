import React, { Component } from 'react';
import './Timer.css';
import { Progress } from 'antd';
<<<<<<< HEAD
import "antd/dist/antd.css";
=======
>>>>>>> cedef685fc46480270b1677c61e278944a5aa5b2

class Timer extends Component {

    render() {
<<<<<<< HEAD
        return (
=======
        return(
>>>>>>> cedef685fc46480270b1677c61e278944a5aa5b2
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