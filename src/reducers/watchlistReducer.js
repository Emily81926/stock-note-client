import { ADD_TO_WATCHLIST, GET_WATCHLIST, DELETE_WATCHLIST } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return { ...state, message: action.payload };
    default:
      return state
  }


}