import apisauce from 'apisauce'
import {ACCESS_TOKEN,
        CLIENT,
        UID,
        URL} from '../constants/AuthInfo'

const create = () => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL: URL,
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

  const getMyselfProfile = () => api.get('/users/get_my_account')
  const getCode = () => api.post('/auth/get_code', {phone_number: '79608001033' })

  return {
    getMyselfProfile,
    getCode
  }
};
export default {
  create
}
