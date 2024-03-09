import React, { Component } from 'react'
import HelloReact from './HelloReact'

// 1.setState异步实现将多个更新统一进行批处理，减少render执行次数
// 2.setState异步可以确保新 state 与 props 保持数据同步
export class App extends Component {
  render() {
    return (
      <div>
        <HelloReact/>
      </div>
    )
  }
}

export default App