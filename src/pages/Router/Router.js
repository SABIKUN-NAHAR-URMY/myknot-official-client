import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
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
    //         {
    //             path: '/products/:id',
    //             element: <PrivateRoute><Products></Products></PrivateRoute>,
    //             loader: ({params}) => fetch(`https://watchbd-server.vercel.app/products/${params.id}`)
    //         },
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
    //     ]
    // },
    // {
    //     path:'/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     errorElement: <ErrorPage></ErrorPage>,
    //     children:[
    //         {
    //             path:'/dashboard/myOrders',
    //             element: <MyOrders></MyOrders>  
    //         },
    //         {
    //             path:'/dashboard/allSellers',
    //             element: <AllSellers></AllSellers>
    //         },
    //         {
    //             path:'/dashboard/allBuyers',
    //             element: <AllBuyers></AllBuyers>
    //         },
    //         {
    //             path:'/dashboard/addProduct',
    //             element: <AddProduct></AddProduct>
    //         },
    //         {
    //             path:'/dashboard/myProduct',
    //             element: <MyProduct></MyProduct>
    //         },
    //         {
    //             path:'/dashboard/payment/:id',
    //             element: <Payment></Payment>,
    //             loader: ({params})=>fetch(`https://watchbd-server.vercel.app/bookings/${params.id}`)
    //         },
    //         {
    //             path:'/dashboard/reportedItems',
    //             element: <ReportedItems></ReportedItems>
    //         }
            
        ]
    }
])