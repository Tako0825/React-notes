import React, { Component } from 'react'
import { AppWrapper, ButtonWrapper, ConfirmWrapper, CancelWrapper } from './style'

export class App extends Component {
  constructor() {
    super() 
    this.state = { textcolor: 'skyblue' }
  }

  changeColor() {
    this.setState({
      textcolor: this.state.textcolor==='skyblue'?'hotpink':'skyblue'
    })
  }

  render() {
    const { textcolor } = this.state
    return (
      <div>
        <h1>App</h1>
        <AppWrapper textcolor={textcolor}>
          <span>Hello React.</span>
          <ButtonWrapper onClick={() => this.changeColor()}>click</ButtonWrapper>
          <br />
          <ConfirmWrapper onClick={() => alert('确定')}>确定</ConfirmWrapper>
          <CancelWrapper onClick={() => alert('取消')}>取消</CancelWrapper>
        </AppWrapper>
      </div>
    )
  }
}
// 1.styled-components
// 2.emotion

export default App