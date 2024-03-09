import React, { Component, createRef } from 'react'
import HelloReact from './HelloReact'

export class App extends Component {
    constructor() {
        super()
        this.state = {}
        this.helloReactRef = createRef()
    }
    
    componentDidMount() {
        console.log(this.helloReactRef.current);
    }

    render() {
        return <HelloReact ref={this.helloReactRef}/>
    }
}

export default App