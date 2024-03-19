import React from 'react'
import { useNavigate, useParams, useRoutes } from 'react-router-dom'
import { routes } from './router'

function App() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Header</h1>
      {
        routes.map(route => (
          <button 
            key={route.path}
            onClick={() => navigate(route.path)}
          >{route.path}</button>
        ))
      }
      <hr />
      <main>
        {useRoutes(routes)}
      </main>
      <hr />
      <h1>Footer</h1>
    </>
  )
}

export default App