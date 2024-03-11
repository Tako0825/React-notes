import React, { PureComponent } from 'react'
import withInjectedProps from './hocs/withInjectedProps'

export class Header extends PureComponent {
  render() {
    const { text, date } = this.props
    return (
      <div>{text}: {date}</div>
    )
  }
}

export default withInjectedProps(Header)