import React from 'react'
import UserHeader from '../../components/UserHeader'
import UpdateRecordTable from '../../components/ProfComp/UpdateRecordTable'
import { useParams } from 'react-router-dom';
import { fetchStudentRecord } from '../../hooks/api';
import useFetch from '../../hooks/useFetch';

const RecordBookUpdPage = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(() => fetchStudentRecord(id));
    return (
    <div>
        <UserHeader/>
        <UpdateRecordTable />
    </div>
  )
}

export default RecordBookUpdPage