import { FETCH_EARNING_PER_SHARE } from '../../actions/types'

// eslint-disable-next-line 
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EARNING_PER_SHARE:
      const eps = action.payload.map(eps => {
        let newObj = {};
        newObj["date"] = eps.date;
        newObj["symbol"] = eps.symbol;
        newObj["eps"] = eps.earningspersharebasic;
        return newObj
      });
      return eps;
    default:
      return state;
  }
};



//要先搞清楚每一個action.payload要用取得的是什麼資料？