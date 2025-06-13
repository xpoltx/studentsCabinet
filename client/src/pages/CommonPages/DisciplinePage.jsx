import React from 'react'
import UserHeader from '../../components/Common/UserHeader'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { fetchDisciplineInfo } from '../../services/disciplinesService'
import DisciplineTableInfo from '../../components/Common/DisciplineTableInfo'
import DataLoader from '../../components/Common/DataLoader'


const DisciplinePage = () => {

  const { id: disciplineId } = useParams();
  const { data, loading, error } = useFetch(() => fetchDisciplineInfo(disciplineId));

  return (
    <DataLoader loading={loading} error={error} data={data}>
      <div>
        <UserHeader />
        <DisciplineTableInfo disciplineData={data} />
      </div>
    </DataLoader>
  )
}

export default DisciplinePage