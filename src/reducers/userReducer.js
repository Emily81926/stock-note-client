import { SIGN_UP } from '../actions/types'

// eslint-disable-next-line 
export default (state = {}, action) => {
  switch(action.type){
    case SIGN_UP:
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
}