import axios from "axios";

const initialState = {
    data: {},
    loading: "",
    errMsg: ""
}
const dogReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_DOG':
        return {
            ...state,
            data: action.dog,
        }

        default:
        return state;
    }
}

export const getDog = () => {

    return dispatch =>  {
        axios.get ("https://dog.ceo/api/breeds/image/random").then(response => {
            dispatch({
                type: "GET_DOG",
                dog: response.data.message
            })
          
        })
        
    .catch(err=>{
        dispatch({
            type: "ERR_MSG",
            errMsg: "Sorry, The requested data is not available"
        })
    })
}
}
export default dogReducer;