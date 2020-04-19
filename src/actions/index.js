import axios from 'axios';
//Reducerでも使うため定義してexportしておく
export const READ_EVNETS = "READ_EVENTS"

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
const QUERYSTRING = "?token=token123"
//Action
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVNETS, response })
}
