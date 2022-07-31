import { FETCH_DIVIDENDS } from '../../actions/types'

// eslint-disable-next-line 
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DIVIDENDS:
      const dividends = action.payload.map(div => {
        let newObj = {};
        newObj["date"] = div.date;
        newObj["symbol"] = div.symbol;
        newObj["dividends"] = div.dividends;
        return newObj
      });
      return dividends;
    default:
      return state;
  }
};