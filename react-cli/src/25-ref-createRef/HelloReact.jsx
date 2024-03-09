import React, { PureComponent } from 'react'

export class HelloReact extends PureComponent {
  showH2Dom() {
    console.log(this.props.h2.current);
  }

  render() {
    return (
      <div>
        <h2 ref={this.props.h2}>HelloReact</h2>
        <button onClick={() => this.showH2Dom()}>click</button>
      </div>
    )
  }
}

export default HelloReact