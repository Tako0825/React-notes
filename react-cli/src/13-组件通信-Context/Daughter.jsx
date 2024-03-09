import React, { Component } from 'react'
import FirstContext from './FirstContext'

export class Daughter extends Component {
  render() {
    return (
      <FirstContext.Consumer>
        {
          value => {
            return <h1 style={{ color: value.color }}>Daughter</h1>
          }
        }
      </FirstContext.Consumer>
    )
  }
}

export default Daughter