import React, { Component } from 'react'
import "./Navigator.css"

export class Navigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: "图标",
      center: "搜索框",
      right: "放大镜"
    }
  }

  render() {
    const { left, center, right } = this.state
    return (
      <nav>
        <div className="left">{this.props.left(left)}</div>
        <div className="center">{this.props.center(center)}</div>
        <div className="right">{this.props.right(right)}</div>
      </nav>
    )
  }
}

export default Navigator