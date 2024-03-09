import React, { Component } from 'react'

export class Menu extends Component {
  shouldComponentUpdate(newProps, newState) {
    return (this.props.message === newProps.message)?false:true
  }

  render() {
    console.log("Menu render");
    return (
      <div>{this.props.message}</div>
    )
  }
}

export default Menu