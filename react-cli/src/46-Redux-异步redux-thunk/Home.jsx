import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCounterAction } from './redux/actionCreators'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <span>Home: {this.props.counter}</span>
        <button onClick={() => this.props.changeCounter(-5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDisPatchToProps = (dispatch) => ({
  changeCounter(num) {
    dispatch(changeCounterAction(num))
  }
})

export default connect(mapStateToProps, mapDisPatchToProps)(Home)