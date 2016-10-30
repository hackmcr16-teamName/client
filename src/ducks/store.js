import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import interestReducer from './interest'

const rootReducer = combineReducers({
  interests: interestReducer,
})

const initialState = {
  interests: {
    isFetching: false
  },
}


export default createStore(rootReducer, initialState, applyMiddleware(thunk))
