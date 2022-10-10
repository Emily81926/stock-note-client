import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from 'jwt-decode'
import { refreshToken } from '../actions/index'
import axios from "axios";
// const BASE_URL = 'http://localhost:3001/api/watchlist'
const BASE_URL = 'https://stock-note.onrender.com/api/watchlist'


export default axios.create({
  baseURL: BASE_URL
});

// const axiosWatchlist = axios.create({
//   baseURL: BASE_URL
// });

// const axiosJWT = axiosWatchlist.interceptors.request.use(async (config) => {
//   //傳遞給action
// const dispatch = useDispatch()
// //取得指定的reducer
// const user = useSelector(state => state.user)

//      let currentDate = new Date();
//     const decodedToken = jwt_decode(localStorage.accessToken)
//     console.log(decodedToken)
//     if (decodedToken.exp * 1000 < currentDate.getTime()) {
//       dispatch(refreshToken(localStorage.refreshToken))
//       config.headers["authorization"] = `Bearer ${user.currentUser.accessToken}`
//     }
//     return config;
//   },
//     (error) => {
//       return Promise.reject(error);
//     }
// )

//當access token過期時，自動呼叫refreshToken function

// const axiosJWT = () => {
//   //傳遞給action
//   const dispatch = useDispatch()
//   //取得指定的reducer
//   const user = useSelector(state => state.user)

//   useEffect(() => {
//     axiosWatchlist.interceptors.request.use(async (config) => {
//       let currentDate = new Date();
//       const decodedToken = jwt_decode(localStorage.accessToken)
//       console.log(decodedToken)
//       if (decodedToken.exp * 1000 < currentDate.getTime()) {
//         dispatch(refreshToken(localStorage.refreshToken))
//         console.log("after refreshToken:", user)
//         config.headers["authorization"] = `Bearer ${user.currentUser.accessToken}`
//       }
//       return config;
//     },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
//   })

//   return axiosWatchlist
// }

// export default axiosJWT;
