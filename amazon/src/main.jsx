import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import Products from './Pages/Home/Products/Products'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayOut from './Layout/MainLayOut'
import myCreatedRoute from './Route/Route'

// const myCreatedRoute= createBrowserRouter([
//   {
//     path:"/",
//     element:<div>this is my 1st home route</div>
//   },
//   {
//     path:"/products",
//     element:<div>Product route hitted</div>
//   },
//   {
//     path:"/about",
//     element:<div>About route hitted</div>
//   }
// ])

// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element:<section>
//       <div>
//         This is a fixed item
//       </div>
//       <Outlet></Outlet>

//     </section>,
//     children:[
//       {
//         path:"/",
//         element: <div>This is home route</div>
//       },
//       {
//         path:"/product",
//         element: <div>This is product route</div>
//       },
//     ]
//   }
// ])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
