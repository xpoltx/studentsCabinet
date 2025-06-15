import React, { useContext } from 'react'
import UserHeader from '../../components/Common/UserHeader'
import CurriculumTable from '../../components/StudComp/CurriculumTable'
import ReturnButton from '../../components/Common/ReturnButton'
import { AppContent } from '../../context/AppContext'
import { fetchAccountData } from '../../services/userDataService'
import useFetch from '../../hooks/useFetch'
import DataLoader from '../../components/Common/DataLoader'

const CurriculumPage = () => {
  const { userRole, userId } = useContext(AppContent);

  const { data, loading, error } = useFetch(() => fetchAccountData({ role: userRole, id: userId }));
  
  return (
    <div>
      <UserHeader />
      <ReturnButton />
      <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>
        Навчальний план
      </h1>
      <DataLoader loading={loading} error={error} data={data}> 
        {data?.group && <CurriculumTable group={data.group} />}
      </DataLoader>
    </div>
  )
}

export default CurriculumPage