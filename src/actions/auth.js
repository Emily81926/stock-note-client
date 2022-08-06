import { GET_GOOGLE_USER } from './types';
import axios from "axios";

export const googleLogin = () => async dispatch => {
  window.open('http://localhost:3001/auth/google', "_self")
}

//如果成功登入，就可以來提取google的使用者資料
export const getGoogleUser = () => async dispatch => {
 const response = await axios({
    method: 'GET',
    url: 'http://localhost:3001/auth/login/success',
    responseType: 'json',
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Controle-Allow-Credentials": true
    },
  })

  if (response.request.status === 200) { 
    localStorage.setItem("token", response.data.user.token)
    console.log('google setItem')
    console.log('google token:', response.data.user.token )}

  dispatch({ type: GET_GOOGLE_USER, payload: response.data.user })
}
