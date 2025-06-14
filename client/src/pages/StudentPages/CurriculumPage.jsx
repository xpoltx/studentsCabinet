import React from 'react'
import UserHeader from '../../components/Common/UserHeader'
import CurriculumTable from '../../components/StudComp/CurriculumTable'
import ReturnButton from '../../components/Common/ReturnButton'

const CurriculumPage = () => {

  return (
    <div>
      <UserHeader />
      <ReturnButton />
      <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>
        Навчальний план
      </h1>
      <CurriculumTable group={'cs-921a'} />
    </div>
  )
}

export default CurriculumPage