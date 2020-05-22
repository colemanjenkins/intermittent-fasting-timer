import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <MDBFooter color="blue" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <h5 className="title">From the devs:</h5>
                                <p>
                                    Thank you for using Intermittent Fasting Timer!
                            </p>
                            </MDBCol>
                            <MDBCol md="6" className="py-3">
                                <h5 className="title">Additional Resources</h5>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.healthline.com/nutrition/intermittent-fasting-guide">
                                    Intermittent Fasting 101 — The Ultimate Beginner's Guide
                                </a>
                                <div>{" "}</div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.healthline.com/nutrition/6-ways-to-do-intermittent-fasting">
                                    6 Popular Ways to Do Intermittent Fasting
                                </a>
                                <div>{" "}</div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.health.harvard.edu/blog/intermittent-fasting-surprising-update-2018062914156">
                                    Harvard Health Blog Article
                                </a>
                                <div>{" "}</div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.webmd.com/diet/news/20191226/intermittent-fasting-diet-could-boost-your-health#1">
                                    Intermittent Fasting Health Impacts
                                </a>
                                <div>{" "}</div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.medicalnewstoday.com/articles/327398">
                                    Intermittent Fasting Tips
                                </a>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>

                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}

export default Footer