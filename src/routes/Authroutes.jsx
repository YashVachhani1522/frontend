import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../pages/Authentication/login/Login'
import Registation from '../pages/Authentication/registration/Registation'
import Forgetpassword from '../pages/Authentication/forgetpassword/Forgetpassword'
import Header from '../layouts/header/Header'

const Authroutes = () => {
    const authroute = useRoutes([
        // {
        //     path:"",
        //     element:<Header/>
        // },
        {
            path: "/signin",
            element: <Login></Login>,

        },{
            path: "/signup",
            element: <Registation/>
        },{
            path: "/forget-password",
            element: <Forgetpassword/>
        }
    
    ])
    return authroute}

export default Authroutes