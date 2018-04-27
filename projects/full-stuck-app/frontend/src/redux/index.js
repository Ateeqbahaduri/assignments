import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import axios from 'axios';

// make a reducer for the default state.
const reducer = (state = { data: []}, action) => {
    console.log("action", action)
    switch (action.type){
    // write a case what the do with the bears
        case "GET_BEARS":
            return {
                ...state,       // its good convention to put the spread of state you dont accidently override things.
                data: action.data
            }
        default: 
            return state;
    }
}

// need a fuction to get all the bears out the data base or use api to get it out of the database
export const getBears = () => {
    return dispatch => {
        axios.get('/bears')
            .then(response => {
                dispatch({
                    type: "GET_BEARS",
                    data: response.data // throw the data into the State that later on we call it store
                })
            })
    }

}

export const newBear = (obj) => {
    console.log("redux", obj);

    return dispatch => {
        axios.post(`/bears`, obj)
            
    }
    
}
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));

export default store;