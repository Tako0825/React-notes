import React, { Component } from 'react'
import Navigator from './Navigator'

export class App extends Component {
  render() {
    return (
        <Navigator
          left={(text) => <button>{text}</button>}
          center={(text) => <h2>{text}</h2>}
          right={(text) => <i>{text}</i>}
        />
    )
  }
}

export default App