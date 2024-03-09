import React, { Component } from 'react'
import Article from './Article'
import Menu from './Menu'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello React"
        }
    }

    changeMessage() {
        this.setState((state, props) => {
            const message = 
                (state.message==='Hello React')
                ?'Hello World'
                :'Hello React'
            return { message }
        })
    }

    render() {
        console.log("App render");
        const { message } = this.state
        return (
            <div>
                <h1>App: {message}</h1>
                <button onClick={() => this.changeMessage()}>click</button>
                <Article message={"Article"}/>
                <Menu message={"Menu"}/>
            </div>
        )
    }
}

export default App