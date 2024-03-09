import React, { Component } from 'react'
import CounterGroup from './CounterGroup'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            num: 100,
            groups: [
                [1,5,10],
                [-1,-5,-10],
                [100,500,1000]
            ]
        }
    }

    changeNum(num) {
        this.setState({ num: this.state.num + num })
    }

    render() {
        const { num, groups } = this.state
        return (
        <div>
            <h1>{num}</h1>
            {
                groups.map(group => (
                    <CounterGroup 
                        nums={group} 
                        changeNum={(num) => this.changeNum(num)}
                        key={group}
                    />
                ))
            }
        </div>
        )
    }
}

export default App