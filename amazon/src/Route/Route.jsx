import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Home/Products/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";


const myCreatedRoute = createBrowserRouter([
    {
      path:"/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/products",
          element: <Products></Products>,
          loader:() => fetch('https://dummyjson.com/products')
        },
        {
          path:"/dashboard",
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ])

export default myCreatedRoute;