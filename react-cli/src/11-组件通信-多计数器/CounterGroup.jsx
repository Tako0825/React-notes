import React, { Component } from 'react'

export class CounterGroup extends Component {
  render() {
    const { nums, changeNum } = this.props
    return (
      <div>
        {
          nums.map((num, index) => {
            return (
              <button 
                key={index}
                onClick={() => changeNum(num)}
              >{num}</button>
            )
          })
        }
      </div>
    )
  }
}

export default CounterGroup