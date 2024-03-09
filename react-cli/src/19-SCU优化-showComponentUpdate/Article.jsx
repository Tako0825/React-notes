import React, { Component } from 'react'

export class Article extends Component {
  shouldComponentUpdate(newProps, newState) {
    return (newProps.message === this.props.message)?false:true
  }

  render() {
    console.log("Article render");
    return (
      <div>{this.props.message}</div>
    )
  }
}

export default Article