import React, { Component } from 'react'
import Campus from './Campus'
import Course from './Course'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Campus />
        <Course />
      </div>
    )
  }
}

export default App