import React, { PureComponent } from 'react'
import withInjectedContext from './hocs/withInjectedContext';

export class Menu extends PureComponent {
    componentDidMount() {
        console.log("<Menu />", this.props)
    }

    render() {
        const { size, color, text } = this.props
        return (
        <div style={{color, fontSize: size}}>{text}</div>
        )
    }
}

export default withInjectedContext(Menu)