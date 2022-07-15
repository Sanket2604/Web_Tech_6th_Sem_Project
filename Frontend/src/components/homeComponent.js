import React from 'react';
import '../Css/homepage.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import vid from '../videos/vid.mp4'

function Home(){

    Aos.init({
        duration: 1000,
    })

    return(
        <div className="home">
            <video control autoPlay muted loop>
                <source src={vid} type="video/mp4"/>
            </video>
            <div className="content_cont1" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="1500">
                Welcome To Chill Zone!!! 
            </div>
            <div className="content_cont2" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="2000">
                <div className="quotes">"</div>A place where only good vibes exist with specially curated music playlists for you. <br/>Come in and lets vibe together!!!!<br/><div className="quotes1">"</div>
            </div>
        </div>
        )
}
export default Home;