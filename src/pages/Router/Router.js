import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import CategoryData from "../CategoryData/CategoryData";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import MyOrders from "../MyOrders/MyOrders";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categoryData/:id',
                element: <CategoryData></CategoryData>,
                loader: ({params}) => fetch(`https://myknot-official-sever.vercel.app/categoryData/${params.id}`)
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        children:[
            {
                path:'/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            }
            
        ]
    }
])