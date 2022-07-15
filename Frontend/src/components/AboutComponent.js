import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseURL } from '../shared/baseURL'
import '../Css/aboutus.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function RenderLeader({leaders}){

    return(
        <Media tag="li" data-aos="fade-right" data-aos-easing="ease-in-out">
            <Media left middle>
                <img src={baseURL + leaders.image} height="130px" width="110px" />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leaders.name}</Media>
                    <h6>{leaders.designation}</h6>
                    <p>{leaders.description}</p>
            </Media>
            <div className="t1"></div>
            <div className="t2"></div>
        </Media>
    );
}

function About(props) {
    
    Aos.init({
        duration: 1000,
    })

    const renderLeader = props.leaders.leaders.map((leaders) => {
        return (
            <div className="col-12">    
                <RenderLeader leaders={leaders}/>
            </div>
        );
    });
    return(
        <div className="aboutus container-fluid">
            <div className="row">
                <Breadcrumb data-aos="fade-down" data-aos-easing="ease-in-out">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2 data-aos="fade-right" data-aos-easing="ease-in-out">About Us</h2>
                </div>                
            </div>
            <div className="row section1">
                <div className="col-12">
                    <div className="img_cont">
                        <div className="img_" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="1000">
                            <div className="img img1"><div className="overlay">Tony Stark</div></div>
                        </div>
                        <div className="img_" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1500">
                            <div className="img img2"><div className="overlay">Annabeth Chase</div></div>
                        </div>
                        <div className="img_" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-delay="2000">
                            <div className="img img3"><div className="overlay">John Wick</div></div>
                        </div>
                    </div>
                    <div className="content" data-aos="fade-left" data-aos-easing="ease-in-out">
                        <p>Started in 2010, Chill Zone quickly established itself as a culinary icon par excellence in India. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in India.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <b>The Frying Pan</b>, a successful chain started by our CEO, Mr. Robert Downey, Jr., that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                </div>
                <div className="col-3"></div>
                <div className="col-12 col-md-6 mt-5 stats">
                    <Card data-aos="fade-up" data-aos-easing="ease-in-out">
                        <CardHeader className="text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">26 Apr. 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Stark Industries</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$420,069</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">69 + Robots</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-3"></div>
                
            </div>
            <div className="row section2">
                <div className="col-12 mt-5">
                    <h2 data-aos="fade-ride" data-aos-easing="ease-in-out">Corporate Leadership</h2>
                </div>
                <div className="col-12 mt-5">
                    <Media list>
                        {renderLeader}
                    </Media>
                </div>
            </div>
            <div className="row section3">
                <div className="col-12 mt-5 mb-5">
                    <h3 data-aos="fade-right" data-aos-easing="ease-in-out">Famous Quotes</h3>
                    <div className="quote" data-aos="fade-right" data-aos-easing="ease-in-out">
                        <div className="line1">
                            You better cut the pizza in four pieces because I'm not hungry enough to eat six.
                        </div>
                        <div className="line2">
                            -Tony Stark
                        </div>
                        <div className="t1"></div>
                        <div className="t2"></div>
                    </div> 
                    <div className="quote" data-aos="fade-left" data-aos-easing="ease-in-out">
                        <div className="line1">
                            It’s cool to be a female character who gets to be really strong and tough.
                        </div>
                        <div className="line2">
                            -Annabeth Chase
                        </div>
                        <div className="t1"></div>
                        <div className="t2"></div>
                    </div>
                    <div className="quote" data-aos="fade-right" data-aos-easing="ease-in-out">
                        <div className="line1">
                            Peace is never an option. If you want peace, prepare for war.
                        </div>
                        <div className="line2">
                            -John Wick
                        </div>
                        <div className="t1"></div>
                        <div className="t2"></div>
                    </div>
                    <div className="quote" data-aos="fade-left" data-aos-easing="ease-in-out">
                        <div className="line1">
                            All great chefs have two things in common. First, they respect nature as the true artist, and they are just cooks. Second, everything that they do is an extension of them as a person.
                        </div>
                        <div className="line2">
                            -Marco Pierre White
                        </div>
                        <div className="t1"></div>
                        <div className="t2"></div>
                    </div>
                    <div className="quote" data-aos="fade-right" data-aos-easing="ease-in-out">
                        <div className="line1">
                            I don’t like looking back. I’m always constantly looking forward. I’m not the one to sort of sit and cry over spilt milk. I’m too busy looking for the next chicken.
                        </div>
                        <div className="line2">
                            -Gordon Ramsay
                        </div>
                        <div className="t1"></div>
                        <div className="t2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;    