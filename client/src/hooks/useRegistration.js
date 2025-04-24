import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AppContent } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useRegistration = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {backendUrl} = useContext(AppContent); 
    const navigate = useNavigate();

    const register = async(fullname,email,password) =>{
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(backendUrl+'/reg',{
                fullname,
                email,
                password
            });
            if(response.status === 200){
                toast.success('Reg succeed');
                navigate('/email-verify');
            }else if(response.status===201){
                toast.error('User with this email already exist');
            }else{
                setError(response.data.error || 'Reg failed');
                toast.error(error)
            }
        } catch (error) {
            setError(error.response?.data?.error || 'Network error');
            toast.error(error)
        }finally{
            setLoading(false);
        }
    }
    
    return {loading, register, error}
}

export default useRegistration