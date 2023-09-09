import React, { useEffect, useState } from "react";
import jwtDecode from 'jwt-decode'
import Login from "../Pages/Login";
import {Outlet, useLocation, useNavigate} from 'react-router-dom'

const auth = () => {
    return JSON.parse(localStorage.getItem("userLoggedIn"))
};


export const useSession = () => {
    const session = auth();
    const decodedSession = session ? jwtDecode(session) : null;
    const location = useLocation()


    const navigate = useNavigate()


    return decodedSession;
}

const ProtectedRoutes = () => {

    const navigate = useNavigate()
    const isAuthorized = auth();
    const session = useSession();
    
    /* useEffect(() => {
        const local = localStorage.getItem("userLoggedIn")
        console.log(local)
        
        if(!local) {
            navigate('/login', { replace: true })
        } 
    }, [navigate, session]) */
    
    

    return isAuthorized ? <Outlet /> : <Login />
}

export default ProtectedRoutes;