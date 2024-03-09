import React, { Component, createRef } from 'react'
import HelloReact from './HelloReact'

export class App extends Component {
    constructor() {
        super()
        this.state = {}
        this.appRef = createRef()
        this.helloReactRef = createRef()
        this.h2Ref = createRef()
    }

    componentDidMount() {
        console.log(this.appRef.current);
        console.log(this.helloReactRef.current);
        console.log(this.h2Ref.current);
    }

    render() {
        return (
            <div>
                <h1 ref={this.appRef}>App</h1>
                <HelloReact 
                    ref={this.helloReactRef}
                    h2={this.h2Ref}
                />
            </div>
        )
    }
}

export default App