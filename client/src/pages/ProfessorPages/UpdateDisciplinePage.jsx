import React, { useEffect, useState } from 'react'
import UserHeader from '../../components/UserHeader'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { fetchDisciplineInfo, updateDiscipline } from '../../hooks/api';
import UpdateDisciplineTableInfo from '../../components/ProfComp/UpdateDisciplineTableInfo';
import useMutation from '../../hooks/useMutation';

const UpdateDisciplinePage = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(() => fetchDisciplineInfo(id));


    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>
    }
    if (error) {
        return <div className='flex justify-center items-center h-screen'>{error}</div>
    }

    return (
        <div>

            <UserHeader />
            <UpdateDisciplineTableInfo id={id} />

        </div>
    )
}

export default UpdateDisciplinePage