import watchlist from "../apis/watchlist"
import { ADD_TO_WATCHLIST, GET_WATCHLIST, DELETE_WATCHLIST } from "./types"

export const addToWatchlist = (token, stock) => async dispatch => {
  const response = await watchlist.post('/', stock, { headers: { Authorization: `Bearer ${token}` } })

  dispatch({ type: ADD_TO_WATCHLIST, payload: response })
}