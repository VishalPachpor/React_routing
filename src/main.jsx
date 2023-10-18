import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../components/Home/home.jsx'
import Layout from './Layout.jsx'
import About from '../components/About/About.jsx'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'


// 1st method for routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//       ,
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// 2nd method for routes
// on line 43 taking value from the url and displaying it in the user component
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='user/id:userid' element={<User />} />
    <Route path='/github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
