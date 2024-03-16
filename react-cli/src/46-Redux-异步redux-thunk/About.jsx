import React, { PureComponent } from 'react'
import { asyncChangeCounterAction } from './redux/actionCreators'
import { connect } from 'react-redux'

export class About extends PureComponent {
  render() {
    return (
      <div>
        <span>About: {this.props.counter}</span>
        <button onClick={() => this.props.asyncChangeCounter(5)}>异步+5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    asyncChangeCounter(count){
        dispatch(asyncChangeCounterAction(count))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)