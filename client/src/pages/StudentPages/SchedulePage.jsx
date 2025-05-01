import React from 'react'
import UserHeader from '../../components/UserHeader'
import ScheduleTable from '../../components/StudComp/ScheduleTable'

const SchedulePage = () => {
  return (
    <div>
      <UserHeader  />
      <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>Temp schedule</h1>
      <ScheduleTable group={'cs-921a'}/>
    </div>
  )
}

export default SchedulePage