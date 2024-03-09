import React, { Component } from 'react'
import tabList from "./tabList.json"

export class App extends Component {
    constructor() {
        super()
        this.state = {
            tabList,
            selectedId: 1
        }
    }

    render() {
        const { selectedId } = this.state
        return (
            <div>
                {
                    tabList.map(tab => (
                        <button
                            style={{ color: selectedId===tab.id?tab.color:'' }}
                            onClick={() => this.setState({ selectedId: tab.id })}
                            key={tab.id}
                        >
                            <b>{tab.title}</b>
                        </button>
                    ))
                }
                {
                    tabList.map(tab => {
                        return (selectedId === tab.id) 
                        && <p key={tab.id}>{tab.description}</p>
                    })
                }
            </div>
        )
    }
}

export default App