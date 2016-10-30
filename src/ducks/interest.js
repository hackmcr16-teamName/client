import axios from 'axios'

const FETCH = 'interest/FETCH'
const SUCCESS = 'interest/SUCCESS'
const FAIL = 'interest/FAIL'
const TOGGLE = 'interest/TOGGLE'


export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH:
      return {...state, isFetching: true}
      break
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        interests: action.interests,
      }
      break
    case FAIL:
      return {...state, isFetching: false}
      break
    case TOGGLE:
      return {
        interests: state.interests.map(interest => {
          if (interest.id !== action.id)
            return interest
          return {...interest, selected: true}
        })
      }
      break
    default:
      return state
  }
}

export function fetchFail() {
  return { type: FAIL }
}

export function fetchInit() {
  return { type: FETCH }
}

export function fetchSuccess(interests) {
  interests.map(interest => interest.selected = false)
  return {
    type: SUCCESS,
    interests
  }
}

export function toggleInterest(id) {
  console.log(`Toggling ${id}`)
  return {
    type: TOGGLE,
    id
  }
}

const tony = 'http://192.168.43.38:8080/interests'

export function fetchInterests() {
  return dispatch => {
    dispatch(fetchInit())
    return axios.get('http://localhost:5000/interests', { //TODO
    }).then(response => {
      return dispatch(fetchSuccess(response.data))
    }).catch(() => {
      return dispatch(fetchFail())
    })
  }
}
