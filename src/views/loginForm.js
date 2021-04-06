import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { LockOutlined, MessageOutlined } from '@ant-design/icons';
import { Login } from "../api/account"
class LoginForm extends Component {
  constructor() {
    super()
    this.state = {}
  }
  handleChangeReg = () => {
    this.props.changeForm('reg')
  }
  onFinish = (val) => {
    Login(val).then(res => {
      console.log(res);
    })
  }
  render () {
    return (
      <Form name="normal_login" className="login-form" onFinish={this.onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: '请输入邮箱', trigger: "blur" }]}>
          <Input autoComplete="off" prefix={<MessageOutlined className="site-form-item-icon" />} placeholder="email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码', trigger: "blur" }]}>
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
        </Form.Item>
        <Form.Item name="code" rules={[{ required: true, message: '请输入验证码', trigger: "blur" }]}>
          <Row gutter={13}>
            <Col span={15}>
              <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Code" />
            </Col>
            <Col span={9}>
              <Button type="danger" block>发送验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <div className="logn_btn">
            <Button type="primary" htmlType="submit" block>Login</Button>
          </div>
        </Form.Item>
        <div className="reg_btn" onClick={this.handleChangeReg}>注册</div>
      </Form>
    )
  }
}
export default LoginForm