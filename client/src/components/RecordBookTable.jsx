import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchRecordBook } from '../services/recordBookService';

const RecordBookTable = ({studentId}) => {

    const {data, loading, error} = useFetch(()=>fetchRecordBook({studentId}));

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;
    }
    if (error) {
        return <div className='flex justify-center items-center h-screen'>{error}</div>;
    }
    if (!data) {
        return <div className='flex justify-center items-center h-screen'>User dont have records</div>;
    }


    return (
    <div className='p-5 mt-10 bg-white rounded-lg shadow-md w-2/3 mx-auto'>
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
                {data.map((item,index)=>
                    <tr key={index} className='hover:bg-gray-100'>
                        <td className='border border-gray-300 px-4 py-2 text-gray-600 cursor-pointer'><Link to={`/discipline/${item.disciplineId._id}`}>{item.disciplineId.name}</Link></td>
                        <td className='border border-gray-300 px-4 py-2 text-gray-600 cursor-default'>{item.grade}</td>
                        <td className='border border-gray-300 px-4 py-2 text-gray-600 cursor-default'>{(item.debt === true) ? "Є" : "Nema"}</td>
                    </tr>
                )}
            </tbody>
        </table>
        
    </div>
  )
}

export default RecordBookTable