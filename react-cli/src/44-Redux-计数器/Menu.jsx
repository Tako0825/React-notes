import React, { PureComponent } from 'react'
import { store } from './store/index'
import { changeCounter } from './store/actionCreators'

export class Menu extends PureComponent {
    constructor() {
        super()
        this.state = { counter: store.getState().counter }
        store.subscribe(() => this.setState({ counter: store.getState().counter }))
    }
    
    render() {
        return (
            <div style={{
                border: "2px red solid",
                padding: "10px",
                margin: "10px"
            }}>
                <h2>Menu: {this.state.counter}</h2>
                {
                    [-10, -20, -88].map(item => (
                        <button 
                            key={item} 
                            onClick={() => store.dispatch(changeCounter(item))}
                        >{item}</button>
                    ))
                }
            </div>
        )
    }
}

export default Menu