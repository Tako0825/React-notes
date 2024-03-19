import { Navigate } from 'react-router-dom'
import { home } from './home'
import { blog } from './blog'
import { about } from './about'

export const routes = [
    {
        path: '/',
        element: <Navigate to='/home'/>
    },
    home,
    blog,
    about
]