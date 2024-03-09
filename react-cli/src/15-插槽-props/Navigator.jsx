import React, { Component } from 'react'
import "./Navigator.css"

export class Navigator extends Component {
  render() {
    return (
      <nav>
        <div className="left">{this.props.left}</div>
        <div className="center">{this.props.center}</div>
        <div className="right">{this.props.right}</div>
      </nav>
    )
  }
}

export default Navigator