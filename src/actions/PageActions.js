import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../constants/Page'
import {
  ACCESS_TOKEN,
  CLIENT,
  UID
} from '../constants/AuthInfo'

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1,2,3,4,5]
      })
    }, 1000)
  }
}
