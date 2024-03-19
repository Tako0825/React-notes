import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { blog as route } from '../router/blog'

function Blog() {
  const navigate = useNavigate()
  return (
    <>
      <div>Blog</div>
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

export default Blog