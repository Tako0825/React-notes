import React, { Component } from 'react'
import Navigator from './Navigator'

export class App extends Component {
  render() {
    return (
        <Navigator>
            <button>左</button>
            <h2>中</h2>
            <i>右</i>
        </Navigator>
    )
  }
}

export default App