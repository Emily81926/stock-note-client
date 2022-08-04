import { SUCCESS_STATUS, GET_GOOGLE_USER } from '../actions/types'

// eslint-disable-next-line 
export default (state = {}, action) => {
  switch(action.type){
    case SUCCESS_STATUS:
      return {...state, status: action.payload.status, message: action.payload.message};
    case GET_GOOGLE_USER:
      return action.payload;
    default:
      return state;
  }
}