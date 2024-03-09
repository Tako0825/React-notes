import React, { Component } from 'react'
import GrandSon from "./GrandSon"

export class Son extends Component {
  render() {
    return (
      <div>
        <h1>Son</h1>
        <GrandSon/>
      </div>
    )
  }
}

export default Son