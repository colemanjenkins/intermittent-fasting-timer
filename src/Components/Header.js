import React, { Component } from 'react';
import './Header.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

class Header extends Component {
    render() {
        if (window.innerWidth < 500) {
            return (
                <div className="smaller">
                    <StickyHeader
                        header={
                            <div>
                                <h1 className="smallerHeaderTitle" style={{ display: "flex", justifyContent: "center" }}>Intermittent Fasting Tracker</h1>
                            </div>
                        }
                    >
                    </StickyHeader>
                </div>
            );
        } else {
            return (
                <div className="header">
                    <StickyHeader
                        header={
                            <div className="Header_root">
                                <h1 className="Header_title" style={{ display: "flex", justifyContent: "center" }}>Intermittent Fasting Tracker</h1>
                            </div>
                        }
                        className="sticky"
                    >
                    </StickyHeader>
                </div>
            );
        }
    }
}

export default Header