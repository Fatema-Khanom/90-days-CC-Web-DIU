import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favourite from "../Pages/Favourite/Favourite";
import Login from "../Pages/Login/Login";


const myCreatedRoute=createBrowserRouter([
    {

        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch ('/phones.json')
            },
            {
                path:"/favourite",
                element:<Favourite></Favourite>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]

    }
])

export default myCreatedRoute;
