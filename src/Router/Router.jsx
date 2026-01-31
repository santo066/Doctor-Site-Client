import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../page/Common/Root";
import Home from "../page/Home/Home";
import SignUp from "../page/SignUp/SignUp";
import Login from "../page/Login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/logIn',
            element:<Login></Login>
        }
    ]
  },
]);