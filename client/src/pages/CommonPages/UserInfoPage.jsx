import React from 'react'
import UserHeader from '../../components/Common/UserHeader'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import AccountInfoTable from '../../components/Common/AccountInfoTable';
import useFetch from '../../hooks/useFetch';
import { fetchAccountData } from '../../services/userDataService';
import mail from '../../assets/mail.png';
import DataLoader from '../../components/Common/DataLoader';
import ReturnButton from '../../components/Common/ReturnButton';



const UserPage = () => {
  const { role, userid } = useParams();
  const { data, loading, error } = useFetch(() => fetchAccountData({ role: role, id: userid }));

  return (
    <DataLoader loading={loading} error={error} data={data}>
      <div>
        <UserHeader />
        <ReturnButton />
        <AccountInfoTable role={role} accountData={data} />
        <div className='flex justify-center items-center mt-4 '>
          <a href={`mailto:${data?.userId.email}`} className='flex space-x-2 box-border border-2 cursor-pointer hover:border-purple-300 duration-300 font-bold py-2 px-4 focus:outline-none focus:shadow-outline'>
            <p>Зв'язатись</p>
            <img src={mail} alt="mail" className='w-6' /></a>
        </div>
      </div>
    </DataLoader>
  )
}

export default UserPage