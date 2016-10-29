import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './components/App'
import Main from './components/Main'
import Login from './components/Login'
import './styles/main.scss'

injectTapEventPlugin()

const routes = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </MuiThemeProvider>
)


ReactDOM.render(routes, document.getElementById('main'))
