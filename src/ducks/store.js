import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import interestReducer from './interest'
import userReducer from './user'

const rootReducer = combineReducers({
  interests: interestReducer,
  user: userReducer,
})

const initialState = {
  interests: {
    isFetching: false
  },
  user: {
    interests: [],
    name: '',
    telephone: '',
  }
}


export default createStore(rootReducer, initialState, applyMiddleware(thunk))
