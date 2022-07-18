import { FETCH_STOCKS, FETCH_STOCK_PROFILE, FETCH_FREE_CASH_FLOW, FETCH_DIVIDENDS, FETCH_EARNING_PER_SHARE, FETCH_ROE_INTERESTCOVERAGE_NETMARGIN, FETCH_INDICATOR_DATA } from '../actions/types'

// eslint-disable-next-line 
 export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      return action.payload;
    case FETCH_STOCK_PROFILE:
      return action.payload;
    case FETCH_FREE_CASH_FLOW:
      return action.payload;
    case FETCH_DIVIDENDS:
      return action.payload;
    case FETCH_EARNING_PER_SHARE:
      return action.payload;
    case FETCH_ROE_INTERESTCOVERAGE_NETMARGIN:
      return action.payload;
    case FETCH_INDICATOR_DATA:
      return action.payload;  
    default:
      return state;
  }
};

//要先搞清楚每一個action.payload要用取得的是什麼資料？