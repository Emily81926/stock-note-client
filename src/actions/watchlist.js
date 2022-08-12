import watchlist from "../apis/watchlist"
import { ADD_TO_WATCHLIST, GET_WATCHLIST, DELETE_WATCHLIST } from "./types"
// import axiosJWT from "../apis/watchlist"


export const addToWatchlist = (token, stock) => async dispatch => {
  const response = await watchlist.post('/', stock, { headers: { Authorization: `Bearer ${token}` } })

  dispatch({ type: ADD_TO_WATCHLIST, payload: response.data })
}

export const getWatchlist = (token) => async dispatch => {
  console.log('get list action')
  //先改一個
  const response = await watchlist.get('/', { headers: { Authorization: `Bearer ${token}` } })

  dispatch({ type: GET_WATCHLIST, payload: response.data })
}

export const deleteFromWatchlist = (token, watchListId) => async dispatch => {
  const response = await watchlist.delete('/', {
    headers: { Authorization: `Bearer ${token}` },
    data: watchListId
  })

  dispatch({ type: DELETE_WATCHLIST, payload: response })
}