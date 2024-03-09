import React, { Component } from 'react'
import Son from "./Son"
import Daughter from './Daughter'

export class App extends Component {
  render() {
    return (
      <div>
        App
        <Son></Son>
        <Daughter></Daughter>
      </div>
    )
  }
}

export default App