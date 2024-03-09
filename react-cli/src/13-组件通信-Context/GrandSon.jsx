import React, { Component } from 'react'
import FirstContext from "./FirstContext"

export class GrandSon extends Component {
  render() {
    return (
        <FirstContext.Consumer>
          {
            value => {
              return <h2 style={{color: value.color}}>GrandSon</h2>
            }
          }
        </FirstContext.Consumer>
    )
  }
}

export default GrandSon