import { createBrowserRouter } from 'react-router-dom'

/* components */
import Home from '../pages/Home'
import Register from '../pages/auth/Register.tsx'
import Login from '../pages/auth/Login.tsx'
import Article from '../pages/Article/index.tsx'
import NewStory from '../pages/FormStory/index.tsx'

import RedirectIfNotLogged from '../components/others/RedirectIfNotLogged.tsx'
import RedirectIfLogged from '../components/others/RedirectIfLogged.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/article/:id',
    element: <Article />,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
  {
    path: '/new-story',
    element: (
      <RedirectIfLogged>
        <NewStory />
      </RedirectIfLogged>
    ),
  },
  {
    path: '/edit-story/:id',
    element: (
      <RedirectIfLogged>
        <NewStory />
      </RedirectIfLogged>
    ),
  },

  /* auth */
  {
    path: '/login',
    element: (
      <RedirectIfNotLogged>
        <Login />
      </RedirectIfNotLogged>
    ),
  },
  {
    path: '/register',
    element: (
      <RedirectIfNotLogged>
        <Register />
      </RedirectIfNotLogged>
    ),
  },

  /* not found */
  {
    path: '*',
    element: <Home />,
  },
])

export default router
