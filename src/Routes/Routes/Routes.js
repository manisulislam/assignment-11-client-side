import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Register from "../../pages/Register/Register";
import Blog from '../../pages/Blog/Blog'
import MyReviews from "../../pages/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";
import ServicesDetails from "../../pages/Home/ServicesDetails";
import Details from "../../pages/Home/Details";
import ReviewUpdate from "../../pages/MyReviews/ReviewUpdate";
import AddServices from "../../pages/AddServices/AddServices";


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
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute> 
            },
            {
                path: '/servicesDetails',
                element:<ServicesDetails></ServicesDetails>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/viewDetails/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <ReviewUpdate></ReviewUpdate>,
                loader: ({params})=>fetch(`http://localhost:5000/myReviews/${params.id}`)
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