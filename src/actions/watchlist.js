import watchlist from "../apis/watchlist"
import { ADD_TO_WATCHLIST, GET_WATCHLIST, DELETE_WATCHLIST } from "./types"

export const addToWatchlist = (token, stock) => async dispatch => {
  const response = await watchlist.post('/', stock, { headers: { Authorization: `Bearer ${token}` } })

  dispatch({ type: ADD_TO_WATCHLIST, payload: response.data })
}

export const getWatchlist = (token) => async dispatch => {
  console.log('get list action')
  const response = await watchlist.get('/', { headers: { Authorization: `Bearer ${token}` } })

  dispatch({ type: GET_WATCHLIST, payload: response.data })
}