import React, { Component } from 'react'
import Navigator from './Navigator'

export class App extends Component {
  render() {
    return (
        <Navigator
          left={<button>左</button>}
          center={<h2>中</h2>}
          right={<i>右</i>}
        />
    )
  }
}

export default App