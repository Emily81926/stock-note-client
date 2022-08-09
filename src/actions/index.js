import stockApis from "../apis/stockApis";
import users from "../apis/users";
import { FETCH_STOCKS, SUCCESS_STATUS, LOCAL_LOGIN, REFRESH_TOKEN, GET_CURRENT_USER } from './types'


export const fetchStocks = () => async dispatch => {
  const response = await stockApis.get(`/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_STOCKS, payload: response.data })
};


export const signUp = formValues => async dispatch => {
  const response = await users.post('/api/user/signup', formValues);

  dispatch({ type: SUCCESS_STATUS, payload: response.data })
}

export const signIn = formValues => async dispatch => {
  const response = await users.post('/api/user/signin', formValues);
  localStorage.setItem('accessToken', response.data.accessToken)
  localStorage.setItem('refreshToken', response.data.refreshToken)

  dispatch({ type: LOCAL_LOGIN, payload: response.data })
}

export const refreshToken = (refreshToken) => async dispatch => {
  const response = await users.post('/api/user/refreshToken', { token: refreshToken })
  localStorage.setItem('accessToken', response.data.accessToken)
  localStorage.setItem('refreshToken', response.data.refreshToken)

  dispatch({ type: REFRESH_TOKEN, payload: response.data })
}

export const getCurrentUser = (token) => async dispatch=>{
  const response = await users.get('/api/user/currentUser',
  {headers:{ Authorization: `Bear ${token}`}})
  
  dispatch({ type: GET_CURRENT_USER, payload: response.data})
}
