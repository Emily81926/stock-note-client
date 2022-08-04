import { GET_GOOGLE_USER } from './types';
import users from "../apis/users";
import axios from "axios";

//如果成功登入，就可以來提取google的使用者資料
export const getGoogleUser = () => async dispatch =>{
  const response = await axios({
    method:'GET',
    url: 'http://localhost:3001/auth/login/success',
    responseType: 'json',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Controle-Allow-Credentials": true
    },
  }).then((response) => {
    if(response.status === 200) return response.json()
    throw new Error("authentication has been failed")
  })
  dispatch({ type: GET_GOOGLE_USER, payload: response })
}