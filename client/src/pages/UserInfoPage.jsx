import React, { useContext, useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AppContent } from '../context/AppContext';
import useGetAccountData from '../hooks/useGetAccountData';
import AccountInfoTable from '../components/AccountInfoTable';

import useFetch from '../hooks/useFetch';
import { fetchUserFullname } from '../hooks/api';
import useGetUserFullname from '../hooks/useGetUserFullname';


const UserPage = () => {

  const backendUrl = useContext(AppContent);
  const { role, userid } = useParams();
  const { getAccountData, loading, error } = useGetAccountData({ role, id: userid });
  const { getFullname } = useGetUserFullname({ id: userid });
  const [fullname, setFullname] = useState('');
  const [data, setData] = useState({});
  const loggedUserRole = useContext(AppContent).userRole;

  // const {data: fullname, loading: fullnameLoading, error: fullnameError} = useFetch(() => fetchUserFullname({
  //   backendUrl: backendUrl,
  //   id: userid
  // }
  // ))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountData = await getAccountData();
        setData(accountData);
        const userFullname = await getFullname();
        setFullname(userFullname);
      } catch (error) {
        toast.error('Error fetching account data: ' + error.message);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }
  if (error) {
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