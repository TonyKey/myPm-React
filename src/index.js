import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NewProject from './views/new-project'
import MainTemplate from './views/main-template'
import ProjectsCanvas from './views/projects-canvas'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NewProject} exact path="/new-project" />
        <Route component={MainTemplate} exact path="/main-template" />
        <Route component={ProjectsCanvas} exact path="/projects-canvas" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
