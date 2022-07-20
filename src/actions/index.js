import stockApis from "../apis/stockApis";
import users from "../apis/users";
import { FETCH_STOCKS, SIGN_UP } from './types'


export const fetchStocks = () => async dispatch => {
  const response = await stockApis.get(`/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_STOCKS, payload: response.data })
};


export const signUp = formValues => async dispatch => {
  const response = await users.post('/users', formValues);

  dispatch({ type: SIGN_UP, payload: response.data })
}
