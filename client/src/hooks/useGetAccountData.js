import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AppContent } from '../context/AppContext';
import axios from 'axios';

const useGetAccountData = ({ role, id }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { backendUrl } = useContext(AppContent);

    const getAccountData = async () => {
        setLoading(true);
        setError(null);
        try {
            let endpoint = backendUrl;
            if (role === 'student') {
                endpoint += `/student/${id}`; ;
            } else if (role === 'professor') {
                endpoint += `/professor/${id}`;
            } else {
                setError('Invalid role provided');
                toast.error('Invalid role provided');
            }
            const response = await axios.get(endpoint, { withCredentials: true });
            if (response.status === 200) {
                return response.data;
            } else {
                toast.error('Failed to fetch account data');
                setError('Failed to fetch account data');
                return;
            }
        } catch (error) {
            toast.error('Error fetching account data: ' + error.message);
            setError('Error fetching account data: ' + error.message);
            return;
        }finally{
            setLoading(false);
        }

    }
    return { loading, error, getAccountData };
}

export default useGetAccountData;