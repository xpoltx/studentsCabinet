import React from 'react'
import { Link } from 'react-router-dom'
import TableComponent from './TableComponent';

const DisciplineTableInfo = (data) => {
    if (!data || !data.disciplineData) {
        return <div>Завантаження інформації про дисципліну...</div>;
    }

    const disciplineRows = [
        {
            label: 'Викладач:',
            value: <Link to={`/info/professor/${data?.disciplineData.professorId._id }`}>
                {data?.disciplineData.professorId.fullname }
            </Link>
        },
        {
            label: 'Курс:',
            value: data.disciplineData.course 
        },
        {
            label: 'Опис:',
            value: data.disciplineData.desc
        },
    ]

    return (
        <div className='p-5 mt-10 bg-white rounded-lg shadow-md w-2/3 mx-auto cursor-default'>
            <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>Інформація про дисципліну {data.disciplineData.name}</h1>
            <TableComponent rows={disciplineRows}/>
        </div>
    )
}

export default DisciplineTableInfo