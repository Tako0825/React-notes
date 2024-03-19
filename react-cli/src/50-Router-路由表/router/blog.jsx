import Blog from '../layouts/Blog'
import BlogOne from '../views/Blog/BlogOne'
import BlogTwo from '../views/Blog/BlogTwo'
import BlogThree from '../views/Blog/BlogThree'

export const blog = {
    path: '/blog',
    element: <Blog />,
    children: [
        {
            path: '/blog/one',
            element: <BlogOne />
        },
        {
            path: '/blog/two',
            element: <BlogTwo />
        },
        {
            path: '/blog/three',
            element: <BlogThree />
        }
    ]
}