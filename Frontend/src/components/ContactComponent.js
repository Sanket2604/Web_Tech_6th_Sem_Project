import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from "reactstrap";
import {Link} from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
import '../Css/contactus.css'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.postFeedback(values)
        this.props.resetFeedbackForm();
    }
    render() {
        return(
            <div className="contactus container-fluid">
                <div className="row">
                    <Breadcrumb data-aos="fade-down" data-aos-easing="ease-in-out">
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row section">
                    <div className="col-12">
                        <h2 style={{textAlign: "center"}} data-aos="fade-right" data-aos-easing="ease-in-out">Send us Your Feedback</h2>
                    </div>
                    <div className="section1 col-2"></div>
                    <div className="section1 col-8">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1000">
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={3}>First Name</Label>
                                <Col md={9}>
                                    <Control.text model=".firstname" className="form-control" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} id="firstname" name="firstname"  placeholder="First Name" />
                                    <Errors className="text-danger" model=".firstname" show="touched" messages={{ required: 'Required', minLength: '  Must be greater than 2 charecters', maxLength: '  Must be lesser than 15 charecters'}} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={3}>Last Name</Label>
                                <Col md={9}>
                                    <Control.text model=".lastname" className="form-control" id="lastname" name="lastname" placeholder="Last Name" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                                    <Errors className="text-danger" model=".lastname" show="touched" messages={{ required: 'Required', minLength: '  Must be greater than 2 charecters', maxLength: '  Must be lesser than 15 charecters'}} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={3}>Conact Tel.</Label>
                                <Col md={9}>
                                    <Control.text model=".telnum" className="form-control"  id="telnum" name="telnum" placeholder="Telephone Number" validators={{required, minLength: minLength(9), maxLength: maxLength(11), isNumber}}/>
                                    <Errors className="text-danger" model=".telnum" show="touched" messages={{ required: 'Required', minLength: '  Must be greater than 9 numbers', maxLength: '  Must be lesser than 11 numbers', isNumber: "Must be a Numbers"}} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={3}>Email</Label>
                                <Col md={9}>
                                    <Control.text model=".email" className="form-control"  id="email" name="email" placeholder="Email Id" validators={{required, validEmail}}/>
                                    <Errors className="text-danger" model=".email" show="touched" messages={{ required: 'Required', validEmail: "  Invalid Email Address"}} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset:3}}>
                                    <div className="form-check">
                                        <Label check className="check">
                                            <Control.checkbox model=".agree" className="form-check-input" name="agree"/> {' '} May we contact you?
                                        </Label>
                                    </div>
                                </Col>
                                
                                <Col md={{size: 3}}>
                                    <Control.select model=".ContactType" className="form-control" name="ContactType" >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={3}>Your Feedback</Label>
                                <Col md={9}>
                                    <Control.textarea model=".message" className="form-control"  id="message" name="message" rows="12"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 12}}>
                                    <div className="submit_cont">
                                        <button className="submit_btn" type="submit" data-aos="fade-up" data-aos-easing="ease-in-out">
                                            Send Feedback
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="section1 col-2"></div>
                    <div class="col-12 section2">
                        <div class="section2_cont">
                            <div class="heading" data-aos="fade-right" data-aos-easing="ease-in-out">
                                <p class="big">You can also reach us by:</p>
                            </div>
                            <div class="contact_us">
                                <div class="reach phone" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="250">
                                    <span><img style={{marginLeft:"3px"}} src="assets/images/phone.png" height="30px" width="20px" alt="" /></span> <a href="tel:+919999999999">+91-9999999999</a>
                                </div>
                                <div class="reach email" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="500">
                                    <span><img src="assets/images/envelope.png" height="30px" width="28px" alt="" /></span><a href="mailto: mail_us@chillzone.com" target="_blank">mail_us@chillzone.com</a>
                                </div>
                                <div class="reach address" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="750">
                                    <span><img src="assets/images/map.png" height="30px" width="22px" alt="" /></span> <a href="#" target="_blank">420, Mitochondria Complex, Hells Street, KGF Road, Bengaluru, Karnataka 560001</a>
                                </div>
                            </div>
                            <div class="socialcontainer">
                                <div class="social-icons">
                                    <a class="mob" href="tel:+919999999999" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="750">
                                        <img style={{marginTop:"5px"}} src="assets/images/phone.png" height="25px" width="15px" alt="" />
                                    </a>
                                    <a class="loc" target="blank" href="#" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="1100">
                                        <img style={{marginTop:"5px"}} src="assets/images/map.png" height="25px" width="19px" alt="" />
                                    </a>
                                    <a class="mail" target="blank" href="mailto: mail_us@chillzone.com" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1150">
                                        <img style={{marginTop:"5px"}} src="assets/images/envelope.png" height="25px" width="22px" alt="" />
                                    </a>
                                    <a class="fb" target="blank" href="https://www.facebook.com" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="1600">
                                        <img style={{marginTop:"5px"}} src="assets/images/facebook.png" alt="" height="25px" width="15px" />
                                    </a>
                                    <a class="link" href="https://www.linkedin.com" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1850">
                                        <img style={{marginTop:"5px"}} src="assets/images/linkedin.png" alt="" height="25px" width="22px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Contact;