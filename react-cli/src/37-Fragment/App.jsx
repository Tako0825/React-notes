import React, { Component } from 'react'
import { Fragment } from 'react'

export class App extends Component {
    constructor() {
        super() 
        this.state = {
            students: [
                { id: 1, name: "李华", age: 20 },
                { id: 2, name: "王明", age: 22 },
                { id: 3, name: "张秀", age: 24 },
            ]
        }
    }

  render() {
    return (
        <>
            <h1>App</h1>
            {
                this.state.students.map(student => {
                    return (
                        <Fragment key={student.id}>
                            <li>{student.name}-{student.age}</li>
                        </Fragment>
                    )
                })
            }
        </>
    )
  }
}

export default App