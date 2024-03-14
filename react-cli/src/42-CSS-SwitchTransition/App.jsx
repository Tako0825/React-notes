import React, { Component } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { FadeInFadeOutDiv } from './style'

export class App extends Component {
    constructor() {
        super() 
        this.state = { isOn: false }
    }

    changeIsOn() {
        this.setState({ isOn: !this.state.isOn })
    }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => this.changeIsOn()}>click</button>
        <FadeInFadeOutDiv>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={this.state.isOn?'on':'off'}
              classNames="slogan"
              timeout={500}
            >
              <p className='slogan'>{this.state.isOn?'on':'off'}</p>
            </CSSTransition>
          </SwitchTransition>
        </FadeInFadeOutDiv>
      </div>
    )
  }
}

export default App