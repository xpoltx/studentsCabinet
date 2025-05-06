import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { fetchStudentsByDiscipline } from '../../services/studentsService'; 


const StudsDiscipTable = ({ id }) => {
  const { data, loading, error } = useFetch(() => fetchStudentsByDiscipline({ id }));
  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }
  if (error) {
    return <div className='flex justify-center items-center h-screen'>{error}</div>
  }

  if (!data) {
    return <div>Завантаження інформації про дисципліну...</div>;
  }

  console.log(data)

  return (
    <div>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Студент</th>
            <th className="border border-gray-300 px-4 py-2">Оцінка</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/info/student/${student.studentId._id}`} className='block w-full h-full'>{student.studentId.fullname}</Link>
              </td>
              <td className="border border-gray-300 px-4 py-2">

                <Link to={`/record-book/upd/discipline/${id}/student/${student.studentId._id}`} className='block w-full h-full'>{ student.grade }</Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default StudsDiscipTable