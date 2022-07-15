import React from 'react';
import {baseURL} from '../shared/baseURL'
import '../Css/footer.css'

function Footer() {

    return(
        <div class="container-fluid footer">
        <div class="row row1">
            <div class="col-12 col-md-12 col-lg-6 section section1" data-aos="fade-right" data-aos-easing="ease-in-out">
                <img className="logo_footer" src={ baseURL + "images/logo_footer.png"} height="70px" alt="Chill Zone"/>
            
                <a href="https://goo.gl/maps/FfPkPDZ4Cugg3xyh6" target="_blank" class="address">
                    <img src={ baseURL + "images/store.png"} height="30px" width="28px" alt="" />
                    <span>420, Mitochondria Complex, Hells Street, KGF Road, Bengaluru, Karnataka 560001</span>
                </a>
                <a href="mailto: mail_us@chillzone.com" target="_blank" class="email"><img src={baseURL + "images/envelope.png"} height="30px" width="28px" alt="" /><span>mail_us@chillzone.com</span></a>
                <a href="tel:+919999999999" class="phone"><img style={{marginLeft:"3px"}} src={baseURL + "images/phone.png"} height="30px" width="20px" alt="" /><span>+91-9999999999</span></a>
                <div class="social-icons_footer">
                    <a class="wht" target="_blank" href="https://wa.me/919999999999"><img style={{marginTop:"5px"}} src={ baseURL + "images/whatsapp.png"} height="25px" width="22px" alt="" /></a>
                    <a class="fac" target="_blank" href="https://www.facebook.com"><img style={{marginTop:"5px"}} src={ baseURL + "images/facebook.png"} alt="" height="25px" width="15px" /></a>
                    <a class="linked" target="_blank" href="https://www.linkedin.com"><img style={{marginTop:"5px"}} src={ baseURL + "images/linkedin.png"} alt="" height="25px" width="22px" /></a>
                </div>
            </div>
            <div class="col-12 col-md-3 col-lg-2 section section2" data-aos="fade-up" data-aos-easing="ease-in-out">
                <div class="heading">Links:</div>
                <div class="box">
                    <div class="box_1">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-9 col-lg-4 section section3" data-aos="fade-up" data-aos-easing="ease-in-out">
                <div class="heading">Location:</div>
                <div class="loc_box"></div>
            </div>
        </div>
        <div class="row row2">
            <div class="col-12">
                <div class="company_line">Chill Zone © 2021 Copyright,<span class="mob"><br/></span> All Rights Reserved <span class="mob tab"><br/></span></div>
            </div>
        </div>
    </div>
    )
}

export default Footer;