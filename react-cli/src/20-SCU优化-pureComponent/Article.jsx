import React, { PureComponent } from 'react'

export class Article extends PureComponent {
  render() {
    console.log("Article render");
    return (
      <div>{this.props.message}</div>
    )
  }
}

export default Article