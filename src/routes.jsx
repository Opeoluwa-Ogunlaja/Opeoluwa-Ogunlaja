import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Projects from './pages/Projects'
import Layout from './hoc/Layout'

export const routes = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        async lazy() {
          let { default: About } = await import('./pages/About')
          return { Component: About }
        }
      },
      {
        path: '/contact',
        async lazy() {
          let { default: Contact } = await import('./pages/Contact')
          return { Component: Contact }
        }
      },
      {
        path: '/projects',
        async lazy() {
          let { default: Projects } = await import('./pages/Projects')
          return { Component: Projects }
        }
      }
    ]
  }
])
