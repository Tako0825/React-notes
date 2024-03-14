import React, { Component } from 'react'
import Home from './Home'
import Menu from './Menu'
import { store } from './store/index'

export class App extends Component {
    constructor() {
        super()
        this.state = { counter: store.getState().counter }
        store.subscribe(() => this.setState({ counter: store.getState().counter }))
    }

  render() {
    return (
      <>
        <h1>App: {this.state.counter}</h1>
        <Home />
        <Menu />
      </>
    )
  }
}

export default App