import { FETCH_DIVIDENDS } from '../../actions/types'

// eslint-disable-next-line 
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DIVIDENDS:
      return action.payload[0];
    default:
      return state;
  }
};