import React, { PureComponent } from 'react'
import SectionModule from './Section.module.css'

export class Section extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={SectionModule.title}>Section</h2>
        <p className={SectionModule.content}>当前部分内容</p>
      </div>
    )
  }
}

export default Section