import apisauce from 'apisauce'
import {ACCESS_TOKEN,
        CLIENT,
        UID,
        URL} from '../constants/AuthInfo'

const create = (baseURL = URL) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Content-Type' : 'application/json',
      'access-token': ACCESS_TOKEN,
      'uid' : UID,
      'client' : CLIENT
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getMyselfProfile = () => api.get('/user/get_my_account')


  return {
    getMyselfProfile
  }
};
export default {
  create
}
