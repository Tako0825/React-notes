import React, { PureComponent } from 'react'
import HeaderModule from './Header.module.css'

export class Header extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={HeaderModule.title}>Header</h2>
        <p className={HeaderModule.content}>头部内容</p>
      </div>
    )
  }
}

export default Header