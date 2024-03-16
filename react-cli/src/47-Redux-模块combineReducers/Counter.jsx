import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { increaseCounterAction, decreaseCounterAction } from './redux/counter/actionCreators'

export class Counter extends PureComponent {
  render() {
    const { counter } = this.props.counterReducer
    return (
      <div>
        <span>Counter: {counter}</span>
        <button onClick={() => this.props.increaseCounter(5)}>+5</button>
        <button onClick={() => this.props.deceaseCounter(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    counterReducer: state.counterReducer
})

const mapDispatchProps = (dispatch) => ({
    increaseCounter: (count) => dispatch(increaseCounterAction(count)),
    deceaseCounter: (count) => dispatch(decreaseCounterAction(count))
})

export default connect(mapStateToProps, mapDispatchProps)(Counter)