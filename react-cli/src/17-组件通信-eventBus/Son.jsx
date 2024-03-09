import React, { Component } from 'react'
import eventBus from './eventBus'

export class Son extends Component {
  constructor() {
    super()

    this.state = {
      liHua: {
        name: "李华",
        age: 20,
        isStudent: true
      }
    }
  }
  
  render() {
    return (
      <div>
        Son:
        <button onClick={() => eventBus.emit("getLiHua", this.state.liHua)}>click</button>
      </div>
    )
  }
}

export default Son