import { SUCCESS_STATUS } from '../actions/types'

// eslint-disable-next-line 
export default (state = {}, action) => {
  switch(action.type){
    case SUCCESS_STATUS:
      return {...state, status: action.payload.status, message: action.payload.message};
    default:
      return state;
  }
}