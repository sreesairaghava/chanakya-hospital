import React from 'react';
import {MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
const Footer = () => {
    return (
        <MDBFooter color="mbd-color" className="font-small pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                    <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Chanakya Hospital</h5>
                        <p>Add details Here, like for more details contact some phone number</p>
                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none"/>
                    <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                            Our Facilites</h6>
                            <p>
                                <a href="#">24X7 Emergency Services</a>
                            </p>
                            <p>
                                <a href="#">Laproscopy Equipment</a>
                            </p>
                            <p>
                                <a href="#">Intensive Care Units</a>
                            </p>
                            <p>
                                <a href="#">Well Equipped Labs</a>
                            </p>
                            <p>
                                <a href="#">Ambulance with Ventilator</a>
                            </p>
                            <p>
                                <a href="#">N.T.R Arogya Seva Scheme</a>
                            </p>
                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none"/>
                    <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful Links</h6>
                            <p>
                                <a href="#">Book an Appointment</a>
                            </p>
                            <p>
                                <a href="#">Know Your Doctor</a>
                            </p>
                            <p>
                                <a href="#">Free Medical Camps</a>
                            </p>
                            <p>
                                <a href="#">Medicines Online</a>
                            </p>
                            <p>
                                <a href="#">F.A.Q</a>
                            </p>
                            <p>
                                <a href="#">Feedback</a>
                            </p>

                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none"/>
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                               <i className="fa fa-home mr-3"/>Rayavaram-533346, AP
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3"/>info@hospital.com
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3"/>08857-234567
                            </p>
                            <p>
                                <i className="fa fa-print mr-3"/>08857-234657
                            </p>
                            <p>
                                 <i className="fa fa-facebook mr-3"/>/ChanakyaHospital
                            </p>
                            <p>
                                <i className="fa fa-twitter mr-3"/>@ChanakyaHospital
                            </p>

                    </MDBCol>
                </MDBRow>
                <hr />
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#" >Raghavacodes.com </a>
        </MDBContainer>
      </div>
        </MDBFooter>
    );
};

export default Footer;