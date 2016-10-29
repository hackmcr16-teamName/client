import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Main from './components/Main'
import Login from './components/Login'


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
)


ReactDOM.render(routes, document.getElementById('main'))
