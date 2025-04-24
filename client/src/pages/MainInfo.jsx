import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import AccountInfoTable from '../components/AccountInfoTable'
import useGetAccountData from '../hooks/useGetAccountData'
import { toast } from 'react-toastify'



const MainInfo = () => {
    const user = JSON.parse(localStorage.getItem('User'));
    const userRole = user?.role;
    const userId = user?._id;
    const {getAccountData, loading, error} = useGetAccountData({role: userRole, id: userId});
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accountData = await getAccountData();
                setData(accountData);
            } catch (error) {
                toast.error('Error fetching account data: ' + error.message);
            }
        };
        fetchData();
    }, []);

    if(loading){
        return <div className='flex justify-center items-center h-screen'>Loading...</div>
    }
    if(error){
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