import React, { PureComponent } from 'react'

export class Menu extends PureComponent {
  render() {
    console.log("Menu render");
    return (
      <div>{this.props.message}</div>
    )
  }
}

export default Menu