import React, { Component, createRef } from 'react'
import HelloReact from './HelloReact'

export class App extends Component {
    getAppRef(dom) {
        console.log(dom);
    }

    getHelloReactRef(instance) {
        console.log(instance);
    }

    render() {
        return (
            <div>
                <h1 ref={(dom) => this.getAppRef(dom)}>App</h1>
                <HelloReact ref={(instance) => this.getHelloReactRef(instance)}/>
            </div>
        )
    }
}

export default App