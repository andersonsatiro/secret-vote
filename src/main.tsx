import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Admin } from './routes/admin/Admin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/admin",
    element: <Admin />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
