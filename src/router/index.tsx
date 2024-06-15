import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('@/pages/login'))
const Page404 = lazy(() => import('@/pages/errors/404'))

const STATIC_ROUTES: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/404',
    element: <Page404 />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
    children: [
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
  ...STATIC_ROUTES,
]

const router = createBrowserRouter(routes)

export default function Router() {
  return <RouterProvider router={router} />
}
