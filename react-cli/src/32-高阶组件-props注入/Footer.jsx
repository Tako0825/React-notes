import React, { PureComponent } from 'react'
import withInjectedProps from './hocs/withInjectedProps'

export class Footer extends PureComponent {
  render() {
    const { text, date } = this.props
    return (
      <div>{text}: {date}</div>
    )
  }
}

export default withInjectedProps(Footer)