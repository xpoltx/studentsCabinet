import React, { useContext } from 'react'
import UserHeader from '../../components/Common/UserHeader'
import ScheduleTable from '../../components/StudComp/ScheduleTable'
import { AppContent } from '../../context/AppContext'
import useFetch from '../../hooks/useFetch'
import { fetchAccountData } from '../../services/userDataService'
import DataLoader from '../../components/Common/DataLoader'
import ReturnButton from '../../components/Common/ReturnButton'

const SchedulePage = () => {
  const { userRole, userId } = useContext(AppContent);

  const { data, loading, error } = useFetch(() => fetchAccountData({ role: userRole, id: userId }));
  return (
    <div>
      <UserHeader />
      <ReturnButton />
      <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>Розклад</h1>
      <div className='flex justify-center items-center'>
        <DataLoader loading={loading} error={error} data={data}>
          {data?.group && <ScheduleTable group={data.group} />}
        </DataLoader>
      </div>
    </div>
  )
}

export default SchedulePage