import React, { PureComponent } from 'react'
import Menu from './Menu'
import Section from './Section'
import ThemeContext from './contexts/themeContext'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            menuTheme: { color: 'red', text: 'Menu' },
            sectionTheme: { color: 'blue', text: 'Section' }            
        }
    }

  render() {
    return (
      <div>
        <h1>App</h1>
        <ThemeContext.Provider value={this.state.menuTheme}>
            <Menu size={30}/>
        </ThemeContext.Provider>        
        <ThemeContext.Provider value={this.state.sectionTheme}>
            <Section size={30}/>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App