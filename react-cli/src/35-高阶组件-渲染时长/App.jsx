import React, { Component } from 'react'
import withRenderSpend from './hocs/withRenderSpend'
import Article from './Article'

export class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <Article />
            </div>
        )
    }
}

export default withRenderSpend(App)