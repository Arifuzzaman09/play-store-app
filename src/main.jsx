import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Rootlayout/RootLayout.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:'/homepage',
          element:<h2>HomePage</h2>
        },
        {
          path:'/apps',
          element:<h2>AppsPage</h2>
        }
      ],
      errorElement:<h2>This Page is not Found </h2>
      
    },
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
