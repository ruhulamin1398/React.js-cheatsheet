import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Hi from './components/Hi.jsx'
import Layout from './components/App/Layout.jsx'
import ReactRouterDom from './components/ReactRouterDom.jsx'
import { UserContextProvider } from './contex/UserContext.jsx'
import Hooks from './components/hooks/Hooks.jsx'
import Redux from './components/Redux.jsx'
 
 



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />
      }
      ,
      {
        path: '/hi',
        element: <Hi />
      },
      {
        path: '/hooks',
        element: <Hooks />
      },
      {
        path: '/route',
        element: <ReactRouterDom />
      },
      {
        path: '/redux',
        element: <Redux/>
      },
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>

  </React.StrictMode>,
)
