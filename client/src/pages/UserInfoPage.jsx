import React, { useContext, useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import AccountInfoTable from '../components/AccountInfoTable';
import useFetch from '../hooks/useFetch';
import { fetchAccountData, fetchUserFullname } from '../services/userDataService'; 




const UserPage = () => {
  const { role, userid } = useParams();
  const {data, loading, error} = useFetch(() => fetchAccountData({role: role, id: userid}));
  const {data: fullname, loading: nameLoading, error: nameError} = useFetch(() => fetchUserFullname({id: userid}));

  if (loading || nameLoading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }
  if (error || nameError) {
    toast.error(error || nameError);
    return <div className='flex justify-center items-center h-screen'>{error}</div>
  }

  return (
    <div>
      <UserHeader  />
      <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>{fullname}</h1>
      <AccountInfoTable role={role} accountData={data} />
    </div>
  )
}

export default UserPage