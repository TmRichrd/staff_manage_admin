import React, { Component } from 'react'
import './style/login.scss';
import LoginForm from "./loginForm"
class Login extends Component {
  constructor() {
    super()
    this.state = {
      formType: "login"
    }
  }
  handleChangeForm = (val) => {
    this.setState({
      formType: val
    })
  }
  render () {
    return (
      <div className="form_warp">
        <div className="form_box">
          <h1>登录</h1>
          {this.state.formType === 'login' ? <LoginForm changeForm={this.handleChangeForm} /> : ''}
        </div>
      </div>
    )
  }
}
export default Login