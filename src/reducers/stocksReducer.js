import { FETCH_STOCKS, FETCH_STOCK } from '../actions/types'

// eslint-disable-next-line 
 export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      return action.payload;
    case FETCH_STOCK:
      return action.payload;
    default:
      return state;
  }
};