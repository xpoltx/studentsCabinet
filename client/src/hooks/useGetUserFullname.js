import React, { useContext, useState } from 'react'
import { AppContent } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const useGetUserFullname = ({id}) => {


    const { backendUrl } = useContext(AppContent);
    const getFullname = async() =>{
        try {
            const res = await axios.get(`${backendUrl}/user/${id}`, { withCredentials: true });
            if (res.status === 200) {
                return res.data.fullname;
            } else {
                toast.error('Failed to fetch user fullname');
                return;
            }
        } catch (error) {
            toast.error('Error fetching user fullname: ' + error.message);
            return;
        }
    }

    return {getFullname}
}

export default useGetUserFullname