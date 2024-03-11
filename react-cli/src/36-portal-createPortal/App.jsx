import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export class App extends Component {
    constructor() {
        super() 
        this.state = { modalVisible: false }
    }

    render() {
        return (
        <div>
            <h1>App</h1>
            {
                createPortal(
                    <h1
                        style={{
                            display: this.state.modalVisible?'block':'none',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >modal</h1>,
                    document.querySelector("#root")
                )
            }
            <button 
                onClick={() => {
                    this.setState({
                        modalVisible: !this.state.modalVisible
                    })
                }}
            >click</button>
        </div>
        )
    }
}

export default App