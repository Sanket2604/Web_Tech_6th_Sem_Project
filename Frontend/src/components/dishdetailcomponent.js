import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent'
import {baseURL} from '../shared/baseURL'
import '../Css/dish_detail.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len); 

function RenderDish({dish}) {

    if (dish != null) {
        return (
            <Card data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <CardImg width="100%" height="500px" src={baseURL + dish.image} alt={dish.name} />
                <CardBody>
                    <div className="heading">
                        <div className="food_name">{dish.name}</div>
                        <div className="price">$ {dish.price}</div>
                    </div>
                    <CardText> {dish.description} </CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({comments, postComment, dishId}){
    if (comments == null) {
        return (<div></div>)
    }
    
    const cmnts = comments.map(comment => {
            return (
                <div className="comment_cont" key={comment.id} data-aos="fade-right" data-aos-easing="ease-in-out">
                    <img src={baseURL + comment.image} alt="pic" />
                    <div className="comment">
                        <div className="top_line">
                            <div className="name">{comment.author}</div>
                            <div className="date">
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                                </div>
                        </div>
                        <div className="bottom_line">
                            <div className="cmt">
                                {comment.comment}
                            </div>
                            <div className="rating">My Rating: {comment.rating}/5</div>
                        </div>
                    </div>
                </div>
            )

    })
    return (
        <div>
            <h3 style={{paddingBottom: "30px"}}  data-aos="fade-right" data-aos-easing="ease-in-out"> Comments </h3>
            <div className='white_back'>
                {cmnts}
            </div>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    )
}



const DishDetail = (props) => {

    Aos.init({
        duration : 1000,
    });
    const dish = props.dish
    if(props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess){
        <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
    }
    else if (dish == null) {
        return (<div></div>);
    }
    else{
        return (
            <div className="dish_detail container-fluid">
                <div className="row">
                    <Breadcrumb data-aos="fade-down" data-aos-easing="ease-in-out">
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 food_heading">
                        <h2 data-aos="fade-right" data-aos-easing="ease-in-out">{props.dish.name}</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-1 col-md-2 "></div>
                    <div className="col-10 col-md-8 render_card mb-5">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-1 col-md-2"></div>
                    <div className='col-12 comments_section'>
                        <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        )
    }
}

class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleComment(values){
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        this.toggleModal();
    }

    render(){
        return(
            <div>
                <div className="sub_btn_cont" data-aos="fade-up" data-aos-easing="ease-in-out">
                    <div className="submit_btn"  onClick={this.toggleModal}>
                        Post A Comment
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Your Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleComment}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" className="form-control" name="rating" id="rating" validators={{required}}>
                                    <option></option>
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </Control.select>
                                <Errors className="text-danger" model=".rating" show="touched" messages={{ required: 'Required'}} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Name</Label>
                                <Control.text model=".author" className="form-control" validators={{required, minLength: minLength(2), maxLength: maxLength(15)}} id="author" name="author"  placeholder="Name" />
                                <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: '  Must be greater than 2 charecters', maxLength: '  Must be lesser than 15 charecters'}} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message">Comment</Label>
                                <Control.textarea model=".comment" className="form-control" validators={{required}} id="comment" name="comment" rows="4"/>
                                <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required'}} />
                            </FormGroup>
                            <div className="cmt_btn_cont">
                                <button className="cmt_btn" type="submit" value="submit" color="primary">Submit</button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default DishDetail;