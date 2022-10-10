import axios from "axios";
const BASE_URL = 'http://localhost:3001'
// const BASE_URL = 'https://stock-note.onrender.com'


export default axios.create({
  baseURL: BASE_URL
});