import stockApis from "../apis/stockApis";
import { FETCH_STOCKS, FETCH_STOCK } from './types'


export const fetchStocks = () => async dispatch => {
  const response = await stockApis.get(`/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_STOCKS, payload: response.data })
};


export const fetchStock = () => async dispatch => {
  

  dispatch({ type: FETCH_STOCK, payload:[]})
}