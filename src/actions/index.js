import stockApis from "../apis/stockApis";
import users from "../apis/users";
import { FETCH_STOCKS, SUCCESS_STATUS } from './types'


export const fetchStocks = () => async dispatch => {
  const response = await stockApis.get(`/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_STOCKS, payload: response.data })
};


export const signUp = formValues => async dispatch => {
  const response = await users.post('/api/user/signup', formValues);

  dispatch({ type: SUCCESS_STATUS, payload: response.data })
}

