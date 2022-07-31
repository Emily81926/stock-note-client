import { FETCH_ROE_INTERESTCOVERAGE_NETMARGIN } from '../../actions/types'

// eslint-disable-next-line 
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ROE_INTERESTCOVERAGE_NETMARGIN:
      const others = action.payload.map(other => {
        let newObj = {};
        newObj["date"] = other.date;
        newObj["symbol"] = other.symbol;
        newObj["returnOnEquity"] = other.returnOnEquity;
        newObj["interestCoverage"] = other.interestCoverage;
        newObj["netMargin"] = other.netProfitMargin;
        return newObj
      });
      return others;
    default:
      return state;
  }
};

//要先搞清楚每一個action.payload要用取得的是什麼資料？