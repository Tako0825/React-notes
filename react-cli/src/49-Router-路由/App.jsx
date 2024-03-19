import React, { Component } from 'react'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Home from './Home'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/blog"><button>Blog</button></Link>
        
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/blog' Component={Blog}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App