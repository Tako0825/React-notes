import React, { Component } from 'react'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            input: "u can search hear"
        }
    }

    changeInput(e) {
        this.setState((state, props) => {
            console.log(e.target.value);
            return {
                input: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <h1>App</h1>
                <input 
                    type="text" 
                    value={this.state.input}
                    onChange={(e) => this.changeInput(e)}
                />
            </div>
        )
    }
}

export default App