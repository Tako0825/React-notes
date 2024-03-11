import React, { Component } from 'react'
import withLoginAuth from './hocs/withLoginAuth'
import Login from './Login'

export class App extends Component {
  render() {
    const EnhancedLogin = withLoginAuth(Login)
    return (
      <div>
        <h1>App</h1>
        <EnhancedLogin/>
      </div>
    )
  }
}

export default App