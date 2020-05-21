import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './Header.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <StickyHeader
                    header={
                    <div className="Header_root">
                        <h1 className="Header_title" style={{ display: "flex", justifyContent: "center"}}>Intermittent Fasting Tracker</h1>
                    </div>
                    }
                    className="sticky"
                >
                </StickyHeader>
            </div>
        );
    }
}

export default Header