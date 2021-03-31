import logo from './logo.svg';
import "./App.scss"
import React from 'react'
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom'
import Home from './views/home'
import Info from './views/info'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Info} path="/info" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
