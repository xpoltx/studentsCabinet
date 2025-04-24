import React from 'react'
import UserHeader from '../components/UserHeader'
import RecordBookTable from '../components/RecordBookTable'

const RecordBook = () => {
    const user = JSON.parse(localStorage.getItem('User'));
    const userId = user?._id;
  
    return (
    <div>
        <UserHeader />
        <div className='flex justify-center items-center'>
            <RecordBookTable studentId={userId}/>
        </div>
    </div>
  )
}

export default RecordBook