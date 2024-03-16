import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCounterAction } from './redux/actionCreators'

export class Blog extends PureComponent {
  render() {
    return (
      <div>
        <span>Blog: {this.props.counter}</span>
        <button onClick={() => this.props.changeCounter(1)}>+1</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  changeCounter(count) {
    dispatch(changeCounterAction(count))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog)