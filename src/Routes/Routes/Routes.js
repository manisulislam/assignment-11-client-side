import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Register from "../../pages/Register/Register";
import Blog from '../../pages/Blog/Blog'
import MyReviews from "../../pages/MyReviews/MyReviews";
import AddReviews from "../../pages/AddReviews/AddReviews";
import PrivateRoute from "./PrivateRoute";


 export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute> 
            },
            {
                path: '/addreviews',
                element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute> 
            }
        ]
        
            
    },
    {
        path: '*',
        element: <div>
            <h1>Page not found</h1>
        </div>
    }

])