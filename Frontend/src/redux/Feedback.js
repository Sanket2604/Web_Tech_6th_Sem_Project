import * as ActionTypes from './ActionTypes'

export const Feedback = (state= {

    isLoading: true, 
    errMess: null,
    leaders: []

    }, action) => {
    switch(action.type){

        case ActionTypes.ADD_LEADERS:
            return{...state, isLoading: false, errMess: null, feedback: action.payload}
            
        case ActionTypes.LEADERS_LOADING:
            return{...state, isLoading: true, errMess: null, feedback: []}

        case ActionTypes.LEADERS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, feedback: []}

        default: 
            return state;
    }
}