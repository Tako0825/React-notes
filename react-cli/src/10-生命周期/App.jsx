import React, { Component } from 'react'
import Banner from './Banner'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }

    changeIsShow() {
        this.setState({ isShow: !this.state.isShow })
    }

    render() {
        const { isShow } = this.state
        return (
            <div>
                <button onClick={() => this.changeIsShow()}>show or hidden</button>
                {isShow && <Banner/>}
            </div>

        )
    }
}

export default App