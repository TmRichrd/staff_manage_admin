import logo from './logo.svg';
import "./App.scss"
import React from 'react'
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom'
import Login from './views/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
