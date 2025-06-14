import React from 'react'
import UserHeader from '../../components/Common/UserHeader';
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { fetchDisciplineInfo } from '../../services/disciplinesService';
import UpdateDisciplineTableInfo from '../../components/ProfComp/UpdateDisciplineTableInfo';
import DataLoader from '../../components/Common/DataLoader';
import ReturnButton from '../../components/Common/ReturnButton';

const UpdateDisciplinePage = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(() => fetchDisciplineInfo(id));

    return (
        <DataLoader loading={loading} error={error} data={data}>
            <div>

                <UserHeader />
                <ReturnButton />
                <UpdateDisciplineTableInfo id={id} />

            </div>
        </DataLoader>
    )
}

export default UpdateDisciplinePage