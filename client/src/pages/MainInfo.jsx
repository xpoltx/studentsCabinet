import React from 'react'
import UserHeader from '../components/UserHeader'
import AccountInfoTable from '../components/AccountInfoTable'
import { toast } from 'react-toastify'
import useFetch from '../hooks/useFetch'
import { fetchAccountData } from '../hooks/api'



const MainInfo = () => {
    const user = JSON.parse(localStorage.getItem('User'));
    const userRole = user?.role;
    const userId = user?._id;

    const {data, loading, error} = useFetch(() => fetchAccountData({role: userRole, id: userId}));

    if(loading){
        return <div className='flex justify-center items-center h-screen'>Loading...</div>
    }
    if(error){
        toast.error(error);
        return <div className='flex justify-center items-center h-screen'>{error}</div>
    }

    return (
        <div>
            <UserHeader  />
            <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>{user.fullname}</h1>
            <AccountInfoTable role={userRole} accountData={data} />
        </div>
    )
}

export default MainInfo