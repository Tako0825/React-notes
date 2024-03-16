import React, { Component } from 'react'
import Cart from './Cart'
import Counter from './Counter'
import { Provider, connect } from 'react-redux'
import { store } from './redux'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>App</h1>
        <Counter />
        <Cart />
      </Provider>
    )
  }
}

export default App