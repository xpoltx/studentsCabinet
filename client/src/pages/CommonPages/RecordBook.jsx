import React from 'react'
import UserHeader from '../../components/Common/UserHeader'
import RecordBookTable from '../../components/StudComp/RecordBookTable'
import ReturnButton from '../../components/Common/ReturnButton';

const RecordBook = () => {
    const user = JSON.parse(localStorage.getItem('User'));
    const userId = user?._id;

    return (
        <div>
            <UserHeader />
            <ReturnButton />
            <div className='flex justify-center items-center'>
                <RecordBookTable studentId={userId} />
            </div>
        </div>
    )
}

export default RecordBook