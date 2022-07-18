import stockApis from "../apis/stockApis";
import { FETCH_STOCK_PROFILE, FETCH_FREE_CASH_FLOW, FETCH_DIVIDENDS, FETCH_EARNING_PER_SHARE, FETCH_ROE_INTERESTCOVERAGE_NETMARGIN, FETCH_INDICATOR_DATA } from './types'




export const fetchStockProfile = symbol => async dispatch => {
  const response = await stockApis.get(`/profile/${symbol}?apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_STOCK_PROFILE, payload: response.data })
  
};


export const fetchFreeCashFlow = symbol => async dispatch => {
  const response = await stockApis.get(`/cash-flow-statement/${symbol}?limit=120&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_FREE_CASH_FLOW, payload: response.data })
};

export const fetchDividends = symbol => async dispatch => {
  const response = await stockApis.get(`/financial-statement-full-as-reported/${symbol}?apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_DIVIDENDS, payload: response.data })
};


export const fetchEarninPerShare = symbol => async dispatch => {
  const response = await stockApis.get(`/income-statement-as-reported/${symbol}?limit=10&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_EARNING_PER_SHARE, payload:response.data })
};

export const fetchROEInterestCoverageNetMargin = symbol => async dispatch => {
  const response = await stockApis.get(`/ratios/${symbol}?limit=40&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_ROE_INTERESTCOVERAGE_NETMARGIN, payload: response.data })
};

export const fetchIndicatorData = symbol => async dispatch => {
  const response = await stockApis.get(`/technical_indicator/daily/${symbol}?period=10&type=ema&apikey=${process.env.REACT_APP_STOCK_USER_API}`)

  dispatch({ type: FETCH_INDICATOR_DATA, payload: response.data })
};
