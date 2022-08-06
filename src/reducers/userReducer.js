import { SUCCESS_STATUS, GET_GOOGLE_USER, LOCAL_LOGIN } from '../actions/types'

// eslint-disable-next-line 
export default (state = {}, action) => {
  switch(action.type){
    case SUCCESS_STATUS:
      return {...state, status: action.payload.status, message: action.payload.message};
    case GET_GOOGLE_USER:
      console.log("google user reducer:", action.payload)
      return { ...state, currentUser: action.payload };
    case LOCAL_LOGIN:
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
}