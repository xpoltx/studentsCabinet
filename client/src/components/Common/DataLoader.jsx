import React from 'react'
import { toast } from 'react-toastify'

const DataLoader = ({ loading, error, data, children }) => {
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Завантаження...</div>;
    }

    if (error) {
        toast.error(error.message);
        return <div className='flex justify-center items-center h-screen'>{error.message}</div>;
    }

    if (!data) {
        return <div className='flex justify-center items-center h-screen'>Дані не завантажені</div>;
    }
    return <>{children}</>
}

export default DataLoader