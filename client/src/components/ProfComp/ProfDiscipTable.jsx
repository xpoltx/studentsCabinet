import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { fetchProfessorDisciplines } from '../../hooks/api';
import ProfDisciplineCard from './ProfDiscipCard';

const ProfDiscipTable = ({ id, act }) => {

    const { data, loading, error } = useFetch(() => fetchProfessorDisciplines(id));

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>
    }
    if (error) {
        return <div className='flex justify-center items-center h-screen'>{error}</div>
    }

    if (!data) {
        return <div>Завантаження інформації про дисципліну...</div>;
    }

    return (

        <div className='z-0 flex-col justify-center justify-items-center'>
            <div className=" z-0 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-10/12">
                {data.map((discipline, index) => {

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

    )
}

export default ProfDiscipTable