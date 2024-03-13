import React, { Component } from 'react'

export class App extends Component {
    constructor(){
        super()
        this.state = {
            color: 'skyblue'
        }
    }

    changeColor() {
        this.setState({
            color: this.state.color==='skyblue'?'hotpink':'skyblue'
        })
    }

  render() {
    return (
      <div>
        <h1>App</h1>
        <p
            style={{
                fontWeight: "bold",
                fontSize: '24px',
                color: this.state.color
            }}
        >Hello React.</p>
        <button onClick={() => this.changeColor()}>click</button>
      </div>
    )
  }
}

export default App