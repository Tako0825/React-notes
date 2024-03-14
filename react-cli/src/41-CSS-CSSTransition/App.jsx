import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends Component {
    constructor() {
        super() 
        this.state = { isShow: true }
    }

    changeIsShow() {
        this.setState({ isShow: !this.state.isShow })
    }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => this.changeIsShow()}>click</button>
          <CSSTransition
              in={this.state.isShow}
              classNames="slogan"
              timeout={2000}
          >
            <p className='slogan'>Hello React.</p>
          </CSSTransition>
      </div>
    )
  }
}

export default App