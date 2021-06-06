import axios from 'axios'


/**
 * create axios instance for waity api
 */
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export default instance
