import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AboutMe from './components/pages/AboutMe.jsx'
import Contact from './components/pages/Contact.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import Resume from './components/pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        index: true,
        element: <AboutMe />
      }, 
      {
        path: 'contact', 
        element: <Contact />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'Resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
