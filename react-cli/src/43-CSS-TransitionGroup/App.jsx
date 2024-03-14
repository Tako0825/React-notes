import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends Component {
    constructor() {
        super()
        this.state = { nums: [1,2,3] }
    }

    addNum() {
        const nums = [...this.state.nums]
        nums.push(nums[nums.length - 1] + 1)
        this.setState({ nums })
    }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => this.addNum()}>click</button>
        <TransitionGroup>
            {
                this.state.nums.map((item) => {
                    return (
                        <CSSTransition
                            classNames="num"
                            timeout={1000}
                            key={item}
                        >
                            <li style={{
                                backgroundColor: "seagreen",
                                margin: '5px 0'
                            }}>{item}</li>
                        </CSSTransition>
                    )
                })
            }
        </TransitionGroup>
      </div>
    )
  }
}

export default App