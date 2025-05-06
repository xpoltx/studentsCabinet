import React from 'react'
import axios from "axios";
import { AppContent } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';



const userAuthService = () => {

    const { backendUrl, setUser } = useContext(AppContent);
    const navigate = useNavigate();

    const login = async (email, password) => {
        const res = await axios.post(backendUrl + '/login', {
            email,
            password
        }, { withCredentials: true });
        localStorage.setItem("User", JSON.stringify(res.data));
        setUser(res.data);
        navigate('/user-home');
    
    }

    return
}

export default userAuthService
