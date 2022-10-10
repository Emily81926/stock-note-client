import { GET_GOOGLE_USER} from './types';
import axios from "axios";

export const googleLogin = () => async dispatch => {
  window.open('https://stock-note.onrender.com/auth/google', "_self")
}

//如果成功登入，就可以來提取google的使用者資料
export const getGoogleUser = () => async dispatch => {
 const response = await axios({
    method: 'GET',
    url: 'https://stock-note.onrender.com/auth/login/success',
    responseType: 'json',
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Controle-Allow-Credentials": true
    },
  })

  if (response.request.status === 200) { 
    localStorage.setItem("accessToken", response.data.user.accessToken)
    localStorage.setItem("refreshToken", response.data.user.refreshToken)
    console.log('google setItem')
    console.log('google token:', response.data )}

  dispatch({ type: GET_GOOGLE_USER, payload: response.data.user })
}
