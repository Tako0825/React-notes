import Home from "../layouts/Home";
import HomeArticle from '../views/Home/HomeArticle'
import HomeSlogan from '../views/Home/HomeSlogan'

export const home = {
    path: '/home',
    element: <Home />,
    children: [
        {
            path: '/home/article',
            element: <HomeArticle />
        },
        {
            path: '/home/slogan',
            element: <HomeSlogan />
        }
    ]
}