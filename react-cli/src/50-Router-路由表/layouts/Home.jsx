import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { home as route } from '../router/home'

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div>Home</div>
      {
        route.children.map(children => (
          <button 
            key={children.path}
            onClick={() => navigate(children.path)}
          >{children.path}</button>
        ))
      }
      <Outlet />
    </>
  )
}

export default Home