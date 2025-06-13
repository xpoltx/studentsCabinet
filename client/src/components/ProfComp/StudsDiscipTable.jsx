import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { fetchStudentsByDiscipline } from '../../services/studentsService';
import DataLoader from '../Common/DataLoader';


const StudsDiscipTable = ({ id }) => {
  const { data, loading, error } = useFetch(() => fetchStudentsByDiscipline({ id }));

  return (
    <DataLoader loading={loading} error={error} data={data}>
      <div className="max-w-2xl mx-auto mt-8 bg-white shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Оцінки студентів</h2>
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 font-semibold text-gray-700 ">Студент</th>
              <th className="px-4 py-2 font-semibold text-gray-700 ">Оцінка</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100 transition">
                <td className="px-4 py-2">
                  <Link
                    to={`/info/student/${student.studentId._id}`}
                    className="text-gray-700 hover:underline font-medium"
                  >
                    {student.studentId.fullname}
                  </Link>
                </td>
                <td className="px-4 py-2 text-center">
                  <Link
                    to={`/record-book/upd/discipline/${id}/student/${student.studentId._id}`}
                    className={`inline-block w-16 py-1 rounded ${(student.grade >= 60) ? "bg-emerald-200 ": "bg-red-200"} text-emerald-800 font-semibold transition`}
                  >
                    {student.grade}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DataLoader>
  );
};


export default StudsDiscipTable