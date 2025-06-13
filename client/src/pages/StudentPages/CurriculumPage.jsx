import React from 'react'
import UserHeader from '../../components/Common/UserHeader'
import CurriculumTable from '../../components/StudComp/CurriculumTable'

const CurriculumPage = () => {

  return (
    <div>
      <UserHeader />
      <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>
        Навчальний план
      </h1>
      <CurriculumTable group={'cs-921a'} />
    </div>
  )
}

export default CurriculumPage