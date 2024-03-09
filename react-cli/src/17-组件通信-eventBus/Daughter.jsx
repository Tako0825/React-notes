import React, { Component } from 'react'
import eventBus from './eventBus'

export class Daughter extends Component {
    constructor() {
        super()
        this.state = {
            liHua: null
        }
    }

    sendLiHua(liHua) {
        this.setState({ liHua })
    }

    componentDidMount() {
        eventBus.on('getLiHua', liHua => this.sendLiHua(liHua))
    }

    componentWillUnmount() {
        eventBus.off('getLiHua', liHua => this.sendLiHua(liHua))
    }

    render() {
        return (
            <div>
                Daughter:
                <span>{this.state.liHua?.name}</span>
            </div>
        )
    }
}

export default Daughter