import {  FETCH_ROE_INTERESTCOVERAGE_NETMARGIN } from '../../actions/types'

// eslint-disable-next-line 
export default (state = [], action) => {
  switch (action.type) {
   
    case FETCH_ROE_INTERESTCOVERAGE_NETMARGIN:
      return action.payload[0];
    default:
      return state;
  }
};

//要先搞清楚每一個action.payload要用取得的是什麼資料？