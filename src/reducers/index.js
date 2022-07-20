import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import stocksReducer from "./stockReducers/stocksReducer";
import profileReducer from "./stockReducers/profileReducer";
import dividendsReducer from "./stockReducers/dividendsReducer";
import epsReducer from "./stockReducers/epsReducer";
import freeCashReducer from "./stockReducers/freeCashReducer";
import otherThreeDataReducer from "./stockReducers/otherThreeDataReducer";
import indicatorReducer from "./stockReducers/indicatorReducer";
import userReducer from "./userReducer";

export default combineReducers({
  stocks: stocksReducer,
  profile: profileReducer,
  dividends: dividendsReducer,
  eps: epsReducer,
  freeCashFlow: freeCashReducer, 
  others:  otherThreeDataReducer,
  indicator: indicatorReducer,
  form: formReducer, //前面一定要寫form
  user: userReducer,
});