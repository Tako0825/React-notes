import React, { Component } from 'react'

export class HelloReact extends Component {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }

    // 1. 传入对象
    fisrtMethod() {
        this.setState({ isShow: !this.state.isShow })
    }

    // 2. 传入回调
    secondMethod() {
        this.setState((state, props) => {
            return { isShow: !state.isShow }
        })
    }

    // 3.异步回调
    thirdMethod() {
        this.setState((state, props) => ({ isShow: !state.isShow }), () => {
            console.log(this.state.isShow);
        })
    }

    render() {
        const { isShow } = this.state
        return (
            <div>
                <button onClick={() => this.fisrtMethod()}>first method</button>
                <button onClick={() => this.secondMethod()}>second method</button>
                <button onClick={() => this.thirdMethod()}>third method</button>
                { isShow && <h1>Hello React.</h1> }
            </div>
        )
    }
}

export default HelloReact