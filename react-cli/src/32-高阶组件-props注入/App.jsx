import React, { Component } from 'react'
import Header from './Header'
import Navigator from './Navigator'
import Footer from './Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Header />
        <Navigator />
        <Footer />
      </div>
    )
  }
}

export default App