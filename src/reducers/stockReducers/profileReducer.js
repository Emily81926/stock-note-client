import { FETCH_STOCK_PROFILE } from '../../actions/types'

// eslint-disable-next-line 
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STOCK_PROFILE:
      // eslint-disable-next-line no-sequences
      return action.payload[0];
    default:
      return state;
  }
};



//要先搞清楚每一個action.payload要用取得的是什麼資料？