import React, { Component } from 'react'
import Header from './Header'
import Section from './Section'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Header />
        <Section />
      </div>
    )
  }
}

export default App