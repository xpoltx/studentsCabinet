import React from 'react'
import UserHeader from '../components/UserHeader'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { fetchDisciplineInfo } from '../hooks/api'
import DisciplineTableInfo from '../components/DisciplineTableInfo'


const DisciplinePage = () => {
  
  const {id: disciplineId} = useParams();
  const {data, loading, error} = useFetch(()=> fetchDisciplineInfo(disciplineId));

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }
  if (error) {
    return <div className='flex justify-center items-center h-screen'>{error}</div>
  }

  return (

    <div>
        <UserHeader/>
        <DisciplineTableInfo disciplineData={data}/>
    </div>
  )
}

export default DisciplinePage