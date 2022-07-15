import React, {useEffect} from "react";
import { Breadcrumb, BreadcrumbItem  } from "reactstrap";
import { Link } from 'react-router-dom'
import {Loading} from './LoadingComponent'
import {baseURL} from '../shared/baseURL'
import '../Css/menu.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { tile2LatLng } from "google-map-react";

function RenderMenuItems({dish}){

    return(
        <div className="card_">
            <Link to = {`/menu/${dish.id}`} >
                <div className="img_cont">
                    <img width="100%" height="220px" src={ baseURL + dish.image } alt={ dish.name } />
                    <div className="overlay">
                        <p className="dish_name"> { dish.name }</p>
                        <p className="label"> {dish.label} </p>
                    </div>
                </div>
            </Link>
        </div>                
    );
}

const Menu = (props) =>{
    
    useEffect(()=>{
        Aos.init({
            duration: 1000,
        })
    })

    const starters = props.dishes.dishes.map((dish) => {
        if(dish.category == "starter"){
            return (
                <div key={ dish.id } className="col-12 col-md-4 col-lg-3 mt-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1000">    
                    <RenderMenuItems dish={dish}/>
                </div>
            );
        }
    });

    const appetizers = props.dishes.dishes.map((dish) => {
        if(dish.category == "Appetizers"){
            return (
                <div key={ dish.id } className="col-12 col-md-4 col-lg-3 mt-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="250">    
                    <RenderMenuItems dish={dish}/>
                </div>
            );
        }
    });

    const mc = props.dishes.dishes.map((dish) => {
        if(dish.category == "Main Course"){
            return (
                <div key={ dish.id } className="col-12 col-md-4 col-lg-3 mt-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="250">    
                    <RenderMenuItems dish={dish}/>
                </div>
            );
        }
    });

    const dessert = props.dishes.dishes.map((dish) => {
        if(dish.category == "Dessert"){
            return (
                <div key={ dish.id } className="col-12 col-md-4 col-lg-3 mt-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="250">    
                    <RenderMenuItems dish={dish}/>
                </div>
            );
        }
    });

    const drink = props.dishes.dishes.map((dish) => {
        if(dish.category == "Drink"){
            return (
                <div key={ dish.id } className="col-12 col-md-4 col-lg-3 mt-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="250">    
                    <RenderMenuItems dish={dish}/>
                </div>
            );
        }
    });

    if(props.dishes.isLoading) {
        return(
            <Loading/>
        );
    }
    else if(props.dishes.errMess) {
        return(
            <h4>{props.dishes.errMess}</h4>
        )
    }
    else{
        return(
            <div className="menu container-fluid">
                <div className="row">
                    <Breadcrumb data-aos="fade-down">
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3 data-aos="fade-right">Our Menu</h3>
                        <hr />
                    </div>
                </div>
                <h4 className="dish_type" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="500">Soup</h4>
                <div className="section1 row mb-5">
                    { starters }
                </div>
                <h4 className="dish_type" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1500">Appetizers</h4>
                <div className="section1 row mb-5">
                    { appetizers }
                </div>
                <h4 className="dish_type" data-aos="fade-up" data-aos-easing="ease-in-out">Main Course</h4>
                <div className="section1 row mb-5">
                    { mc }
                </div>
                <h4 className="dish_type" data-aos="fade-up" data-aos-easing="ease-in-out">Desserts</h4>
                <div className="section1 row mb-5">
                    { dessert }
                </div>
                <h4 className="dish_type" data-aos="fade-up" data-aos-easing="ease-in-out">Drinks</h4>
                <div className="section1 row mb-5">
                    { drink }
                </div>
            </div>
        );
    }
}

export default Menu;