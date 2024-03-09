import React, { Component } from 'react'
import data from "./data.json"

export class Banner extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    // 1.挂载
    componentDidMount() {
        this.setState({ data })
        console.log("mount");
    }

    // 2.更新
    componentDidUpdate() {
        console.log("update~");
    }

    // 3.卸载
    componentWillUnmount() {
        console.log("unmount!");
    }

    reverseRed(id) {
        this.setState({
            data: data.map(item => {
                if(item.id === id) item.red = !item.red
                return item
            })
        })
    }

    render() {
        const { data } = this.state
        return (
            <div>
                {
                    data.map(item => (
                        <ul 
                            key={item.id}
                            style={{ color: item.red?'red':'' }}
                        >
                            <li>{item.id}</li>
                            <li>{item.name}</li>
                            <li>{item.age}</li>
                            <button onClick={() => this.reverseRed(item.id)}>click</button>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default Banner