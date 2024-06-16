import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import BasicLayout from '@/layouts/basic-layout'

const Login = lazy(() => import('@/pages/login'))
const About = lazy(() => import('@/pages/about'))
const Home = lazy(() => import('@/pages/home'))
const Page404 = lazy(() => import('@/pages/errors/404'))
const Menu1 = lazy(() => import('@/pages/menu/menu1'))
const Menu3 = lazy(() => import('@/pages/menu/menu3'))
const Menu21 = lazy(() => import('@/pages/menu/menu2/menu21'))
const Menu22 = lazy(() => import('@/pages/menu/menu2/menu22'))

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

const asyncRoutes: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/menu1',
        element: <Menu1 />,
      },
      {
        path: '/menu3',
        element: <Menu3 />,
      },
      {
        path: '/menu2',
        children: [
          {
            path: '',
            element: <Navigate to="/menu2/menu22" />,
          },
          {
            path: 'menu21',
            element: <Menu21 />,
          },
          {
            path: 'menu22',
            element: <Menu22 />,
          },
        ],
      },
    ],
  },
]

const routes: RouteObject[] = [
  ...asyncRoutes,
  ...STATIC_ROUTES,
]

const router = createBrowserRouter(routes)

export default function Router() {
  return <RouterProvider router={router} />
}
