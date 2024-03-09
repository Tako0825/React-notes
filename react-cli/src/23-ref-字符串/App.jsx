import React, { Component } from 'react'
import HelloReact from './HelloReact'

export class App extends Component {
    componentDidMount() {
        console.log(this.refs.app);
        console.log(this.refs.helloreact);
    }

    render() {
        return (
        <div>
            <h1 ref={"app"}>App</h1>
            <HelloReact ref={"helloreact"}/>
        </div>
        )
    }
}

export default App