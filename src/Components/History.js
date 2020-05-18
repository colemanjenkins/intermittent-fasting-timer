import React, { Component } from 'react';
import './History.css';
import { isEmpty } from "lodash";

class History extends React.Component {

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

                </div>
                
                }
            </div>
        );
    }
}

export default History