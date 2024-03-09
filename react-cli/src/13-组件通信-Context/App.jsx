import React, { Component } from 'react'
import Son from "./Son"
import Daughter from "./Daughter"
import FirstContext from "./FirstContext"

export class App extends Component {
  render() {
    return (
      <div>
        <FirstContext.Provider value={{color: 'red'}}>
          <Son/>
        </FirstContext.Provider>
        <Daughter/>
      </div>
    )
  }
}

export default App