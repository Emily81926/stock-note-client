import { combineReducers } from "redux";
import stocksReducer from "./stockReducers/stocksReducer";
import profileReducer from "./stockReducers/profileReducer";
import dividendsReducer from "./stockReducers/dividendsReducer";
import epsReducer from "./stockReducers/epsReducer";
import freeCashReducer from "./stockReducers/freeCashReducer";
import otherThreeDataReducer from "./stockReducers/otherThreeDataReducer";
import indicatorReducer from "./stockReducers/indicatorReducer";

export default combineReducers({
  stocks: stocksReducer,
  profile: profileReducer,
  dividends: dividendsReducer,
  eps: epsReducer,
  freeCashFlow: freeCashReducer,
  data: otherThreeDataReducer,
  indicator: indicatorReducer
});