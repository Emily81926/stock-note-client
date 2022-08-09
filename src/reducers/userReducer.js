import { SUCCESS_STATUS, GET_GOOGLE_USER, LOCAL_LOGIN, LOG_OUT, REFRESH_TOKEN, GET_CURRENT_USER} from '../actions/types'
import _ from 'lodash'

// eslint-disable-next-line 
export default (state = {}, action) => {
  switch(action.type){
    case SUCCESS_STATUS:
      return {...state, status: action.payload.status, message: action.payload.message};
    case GET_GOOGLE_USER:
      console.log("google user reducer:", action.payload)
      return { ...state, currentUser: action.payload };
    case LOCAL_LOGIN:
      return { isLoggedin: true, currentUser: action.payload};
      case REFRESH_TOKEN:
      return { ...state, currentUser: action.payload };
      case GET_CURRENT_USER:
        return {...state, currentUser: action.payload}
      case LOG_OUT:
      return { logout: true } //可以再思考，要不要統一一個格式例如：currentUser: { isLoggedin: false, name: '', email: '', token: ''.....}
    default:
      return state;
  }
}