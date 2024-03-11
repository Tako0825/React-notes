import React, { PureComponent } from 'react'
import withRenderSpend from './hocs/withRenderSpend'

export class Article extends PureComponent {
  render() {
    return (
      <div>Article</div>
    )
  }
}

export default withRenderSpend(Article)