import React, { PureComponent } from 'react'
import { increaseCounter, decreaseCounter, asyncChangeCounter } from './redux/counter/reducer'
import { connect } from 'react-redux'

export class Counter extends PureComponent {
  render() {
    const { counter } = this.props.counterReducer
    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => this.props.increaseCounter(18)}>+18</button>
        <button onClick={() => this.props.asyncChangeCounter(-10)}>-10</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    counterReducer: state.counterReducer
})

const mapDispatchToProps = dispatch => ({
    increaseCounter: (payload) => dispatch(increaseCounter(payload)),
    decreaseCounter: (payload) => dispatch(decreaseCounter(payload)),
    asyncChangeCounter: (payload) => dispatch(asyncChangeCounter(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)