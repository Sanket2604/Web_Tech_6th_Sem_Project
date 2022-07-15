import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {baseURL} from '../shared/baseURL'
import Aos from 'aos'
import 'aos/dist/aos.css'

class Header extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(){
        Aos.init({
            duration: 1000,
        })
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
            <>
                <Navbar expand="md" data-aos="slide-down" data-aos-easing="ease-in-out">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-5" href="/aboutus" data-aos="fade-down" data-aos-easing="ease-in-out">
                            <img src={ baseURL + "images/logo.png"} height="40" width="50" alt="Chill Zone" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="250">
                                    <NavLink className="nav-link pl-2 pr-2" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                    <div className="line"></div>
                                </NavItem>
                                <NavItem data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="500">
                                    <NavLink className="nav-link pl-2 pr-2" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                    <div className="line"></div>
                                </NavItem>
                                <NavItem data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="750">
                                    <NavLink className="nav-link pl-2 pr-2" to="/menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                    <div className="line"></div>
                                </NavItem>
                                <NavItem data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="1000">
                                    <NavLink className="nav-link pl-2 pr-2" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                    <div className="line"></div>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header;