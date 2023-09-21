import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Home/Products/Products";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import Product from "../Product/Product";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import EditProfile from "../Pages/Dashboard/EditProfile";


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
          loader:() => fetch(`https://dummyjson.com/products`)  
        },
        {
          path:"/products/:id",
          element:<Product></Product>,
          loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
          
        },
        {
          path:"/dashboard",
          element: <DashBoardLayout></DashBoardLayout>,
          children:[
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/dashboard/profile",
                element:<Profile></Profile>
            },
            {
                path:"/dashboard/editprofile",
                element:<EditProfile></EditProfile>
            },
          ]
        }
      ]
    }
  ])

export default myCreatedRoute;