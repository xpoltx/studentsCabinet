import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { fetchRecordBook } from '../../services/recordBookService';
import DataLoader from '../Common/DataLoader';

const RecordBookTable = ({ studentId }) => {

    const { data, loading, error } = useFetch(() => fetchRecordBook({ studentId }));

    return (
        <DataLoader loading={loading} error={error} data={data}>
            <div className='p-5 bg-white rounded-lg shadow-md w-2/3 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>Залікова книжка</h1>
                <table className='table-auto w-full border-collapse border border-gray-300'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-300 px-4 py-2 font-semibold text-gray-700 w-2/3'>Назва дисципліни</th>
                            <th className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>Оцінка</th>
                            <th className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>Борг</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) =>
                            <tr key={index} className='hover:bg-gray-100'>
                                <td className='border border-gray-300 px-4 py-2 text-gray-600 cursor-pointer'><Link to={`/discipline/${item.disciplineId._id}`}>{item.disciplineId.name}</Link></td>
                                <td className='border border-gray-300 px-4 py-2 text-gray-600 cursor-default'>{item.grade}</td>
                                <td className= {`border border-gray-300 px-4 py-2 text-gray-600 cursor-default ` + (item.debt === true ? 'bg-red-200': 'bg-emerald-200') }></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </DataLoader>
    )
}

export default RecordBookTable