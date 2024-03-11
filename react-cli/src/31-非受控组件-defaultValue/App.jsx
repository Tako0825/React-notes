import React, { Component, createRef } from 'react'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            input: 'Hello React.'
        }
        this.inputRef= createRef()
    }

    handelInput() {
        this.setState((state, props) => {
            return {
                input: this.inputRef.current.value
            }
        }, () => console.log(this.state.input))
    }

  render() {
    return (
      <div>
        <h1>App</h1>
        <input 
            ref={this.inputRef} 
            defaultValue={this.state.input}
            type="text" 
        />
        <button onClick={() => this.handelInput()}>click</button>
      </div>
    )
  }
}

export default App