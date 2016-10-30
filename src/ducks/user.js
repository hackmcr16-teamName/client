import axios from 'axios'

const NUMBER = 'user/NUMBER'
const NAME = 'user/NAME'
const PIC = 'user/PIC'
const INTERESTS = 'user/INTERESTS'
const RECEIVE = 'user/RECEIVE'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case NUMBER:
      return {...state, telephone: action.number}
      break
    case NAME:
      return {...state, name: action.name}
      break
    case PIC:
      return {...state, base64Image: action.pic}
      break
    case INTERESTS:
      return {...state, interests: action.interests}
      break
    case RECEIVE:
      return {...state, ...action.user}
      break
    default:
      return state
  }
}

export function setName(name) {
  return { type: NAME, name }
}

export function setNumber(number) {
  return { type: NUMBER, number }
}

export function setInterests(interests) {
  return { type: INTERESTS, interests }
}

export function setPic(pic) {
  return { type: PIC, pic }
}

export function receiveUser(user) {
  return { type: RECEIVE, user }
}

export function sendUser(user) {
  return dispatch => {
    return axios.post('http://192.168.43.38:8080/users', user)
      .then(response => {
        dispatch(receiveUser(response.data))
      })
  }
}
