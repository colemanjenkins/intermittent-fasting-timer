import React, { Component } from 'react';
import './History.css';
import { isEmpty } from "lodash";
import HistoryBody from './HistoryBody.js';

class History extends Component {

    render() {
        return (
            <div className="history">
                <div className="sectionHeader">History</div>
                {isEmpty(this.props.fasts) &&
                    <div className="emptyMessage">
                        No fasts yet. Select a template fast or create a custom fast to start!
                    </div>
                }

                {!isEmpty(this.props.fasts) &&
                    <HistoryBody 
                        fasts={this.props.fasts}
                        parseTime={this.props.parseTime}
                    />
                }
            </div>
        );
    }
}

export default History