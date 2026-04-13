import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter} from 'react-router'
import RootLayout from './Rootlayout/RootLayout.jsx'
import Home from './Pages/HomePage/Home.jsx'
import Apps from './Pages/Apps/Apps.jsx'
import Install from './Pages/InstallPage/Install.jsx'
import { RouterProvider } from 'react-router/dom'
import NotFound from './Pages/Not-Found/Not-found.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:'/homepage',
          element:<Home></Home>
        },
        {
          path:'/apps',
          element:<Apps></Apps>
        },
        {
          path:'/installed',
          element:<Install></Install>
        }
      ],
      errorElement:<NotFound></NotFound>
      
    },
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
