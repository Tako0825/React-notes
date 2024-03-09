import React, { Component } from 'react'
import "./Navigator.css"

export class Navigator extends Component {
    // 通过 this.props.children 传递插槽
    componentDidMount() {
        console.log(this.props.children);
    }

  render() {
    const { children } = this.props
    return (
      <nav>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </nav>
    )
  }
}

export default Navigator