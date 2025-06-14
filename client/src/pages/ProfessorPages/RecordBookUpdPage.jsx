import React from 'react'
import UserHeader from '../../components/Common/UserHeader'
import UpdateRecordTable from '../../components/ProfComp/UpdateRecordTable'
import { useParams } from 'react-router-dom';
import ReturnButton from '../../components/Common/ReturnButton';

const RecordBookUpdPage = () => {
    const { disciplineId, studentId } = useParams();
    return (
    <div>
        <UserHeader/>
        <ReturnButton />
        <UpdateRecordTable disciplineId={disciplineId} studentId={studentId} />
    </div>
  )
}

export default RecordBookUpdPage