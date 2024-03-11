import React, { PureComponent } from 'react'

export class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: 'root',
      password: ''
    }
  }

  handelChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handelLogin() {
    this.props.setIsLogin()
    if(
      this.state.username === 'root' 
      && this.state.password === 'admin123'
    ) localStorage.setItem('token', 'takoyaki')
    else localStorage.removeItem('token')
  }

  render() {
    return (
      <div>
        <label htmlFor="username">
          账号：
          <input 
            type="text" 
            value={this.state.username}
            onChange={(e) => this.handelChange(e)}
            name="username"
          />
        </label>
        <br />
        <label htmlFor="username">
          密码:
          <input 
            type="password" 
            value={this.state.password}
            onChange={(e) => this.handelChange(e)}
            name="password"
          />
        </label>
        <br />
        <button onClick={() => this.handelLogin()}>Login</button>
      </div>
    )
  }
}

export default Login