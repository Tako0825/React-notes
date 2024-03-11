import React, { Component, createRef } from 'react'

export class App extends Component {
    constructor() {
        super() 
        this.state = {
            hobbits: [
                { id: 1, name: "唱",  value: "sing", checked: true },
                { id: 2, name: "跳",  value: "dance", checked: false },
                { id: 3, name: "rap",  value: "rap", checked: false },
                { id: 4, name: "篮球",  value: "basketball", checked: false }
            ]
        }
    }

    handelChecked(id) {
        const hobbits = [...this.state.hobbits]
        hobbits.map(hobbit => {
            if(hobbit.id === id) hobbit.checked = !hobbit.checked
            return hobbit
        })
        this.setState({ hobbits })
    }

    handelSubmit(e) {
        e.preventDefault()
        const hobbits = [...this.state.hobbits].filter(hobbit => hobbit.checked).map(hobbit => hobbit.value)
        console.log(hobbits);
    }

    render() {
        return (
        <form action="">
            {
                this.state.hobbits.map(hobbit => (
                    <label htmlFor={hobbit.value} key={hobbit.id}>
                        <input 
                            type="checkbox"
                            checked={hobbit.checked}
                            onChange={() => this.handelChecked(hobbit.id)}
                            name={hobbit.value}
                            id={hobbit.value}
                        />
                        <span>{hobbit.name}</span>
                        <br />
                    </label>
                ))
            }
            <button onClick={(e) => this.handelSubmit(e)}>click</button>
        </form>
        )
    }
}

export default App