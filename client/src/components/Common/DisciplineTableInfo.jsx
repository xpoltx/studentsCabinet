import React from 'react'
import { Link } from 'react-router-dom'

const DisciplineTableInfo = (data) => {
    if (!data || !data.disciplineData) {
        return <div>Завантаження інформації про дисципліну...</div>;
    }
    const empty = '';
    return (
        <div className='p-5 mt-10 bg-white rounded-lg shadow-md w-2/3 mx-auto cursor-default'>
            <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>Інформація про дисципліну {data.disciplineData.name || empty}</h1>

            <table className='table-fixed w-full border-collapse border border-gray-300'>
                <tbody>
                    <tr className='bg-gray-100'>
                        <td className='w-1/2 border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                            Викладач:
                        </td>
                        <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                            <Link to={`/info/professor/${data.disciplineData.professorId._id || empty}`}>
                                {data.disciplineData.professorId.fullname || empty}
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-gray-100'>
                        <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                            Курс:
                        </td>
                        <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                            {data.disciplineData.course || empty}
                        </td>
                    </tr>
                    <tr className='bg-gray-100'>
                        <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                            Опис:
                        </td>
                        <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                            {data.disciplineData.desc || empty}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default DisciplineTableInfo