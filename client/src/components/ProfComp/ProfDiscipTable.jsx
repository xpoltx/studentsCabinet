import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { fetchProfessorDisciplines } from '../../services/disciplinesService';
import ProfDisciplineCard from './ProfDiscipCard';
import DataLoader from '../Common/DataLoader';

const ProfDiscipTable = ({ id, act }) => {

    const { data, loading, error } = useFetch(() => fetchProfessorDisciplines(id));

    return (
        <DataLoader loading={loading} error={error} data={data}>
            <div className='z-0 flex-col justify-center justify-items-center'>
                <div className=" z-0 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 max-w-12/12 py-10">
                    {data?.map((discipline, index) => {

                        const path =
                            act === 'upd'
                                ? `/discipline/upd/${discipline._id}`
                                : act === 'rec'
                                    ? `/students/discipline/${discipline._id}`
                                    : '/main-info'

                        return <ProfDisciplineCard key={index} disciplineData={discipline} path={path} />

                    }
                    )}
                </div>
            </div>
        </DataLoader>
    )
}

export default ProfDiscipTable