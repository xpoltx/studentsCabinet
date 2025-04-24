import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AppContent } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {backendUrl} = useContext(AppContent); 
    const navigate = useNavigate();

    const login = async(email, password) =>{
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(backendUrl+ '/login',{
                email,
                password
            }, {withCredentials: true});
         
            if(response.status === 200){
                localStorage.setItem("User", JSON.stringify(response.data));
                navigate('/user-home');
            }else{
                setError(response.data.error || 'Login failed');
                toast.error('Login');
            }
        } catch (error) {
            setError(error.response?.data?.error || 'Network error');
            toast.error(error);
        }finally{
            setLoading(false);
        }
    }
    
    return {loading, login, error}
}


export default useLogin