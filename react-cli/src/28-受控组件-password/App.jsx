import React, { Component } from 'react'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            username: 'root',
            password: 'admin123'
        }
    }
    
    // 同时控制 username 和 password 的输入
    changeInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { username, password } = this.state
        return (
            <div>
                <label htmlFor="username">
                    账号：
                    <input 
                        value={username} 
                        onChange={(e) => this.changeInput(e)}
                        type="text" 
                        name="username" 
                        id="username"
                    />
                </label>
                <br />
                <label htmlFor="password">
                    密码：
                    <input 
                        value={password} 
                        onChange={(e) => this.changeInput(e)}
                        type="password" 
                        name="password" 
                        id="password" 
                    />
                </label>
            </div>
        )
    }
}

export default App