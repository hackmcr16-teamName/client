import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './views/App'
import Main from './views/Main'
import Login from './views/Login'
import Register from './views/Register'
import RegisterPhone from './views/RegisterPhone'
import RegisterProfilePic from './views/RegisterProfilePic'
import ProfilePage from './views/ProfilePage'
import './styles/main.scss'

injectTapEventPlugin()

const routes = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/registerPhone" component={RegisterPhone} />
        <Route path="/registerProfilePic" component={RegisterProfilePic} />
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(routes, document.getElementById('main'))