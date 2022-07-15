import React, { Component } from 'react';
import Home from './homeComponent';
import Header from './headerComponent'
import Footer from './footerComponent'
import Menu from './menucomponent';
import DishDetail from './dishdetailcomponent';
import Contact from './ContactComponent'
import About from './AboutComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreaters'
import { actions } from 'react-redux-form'

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
    postFeedback:(values)=>postFeedback(values),
})

class Main extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchLeaders();
    }

    render() {

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                comments={this.props.comments.comments.filter((comment) => comment.dishId=== parseInt(match.params.dishId,10))} 
                errMess={this.props.comments.errMess}
                postComment={this.props.postComment}
                />
                
            );
        }

        return (
            <div>
                <Header />
                
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                        <Route path="/menu/:dishId" component={DishWithId} />
                        <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));