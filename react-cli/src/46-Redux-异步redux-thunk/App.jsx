import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'
import Home from './Home'
import Blog from './Blog'
import About from './About'

export class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Home />
            <Blog />
            <About></About>
        </Provider>
    )
  }
}

export default App