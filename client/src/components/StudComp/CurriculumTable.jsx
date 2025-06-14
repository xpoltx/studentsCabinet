import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { fetchCurriculumData } from '../../services/curriculumService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import DataLoader from '../Common/DataLoader';


const CurriculumTable = ({ group }) => {
    const { data, loading, error } = useFetch(() => fetchCurriculumData({ group }));
    const [selectedSemester, setSelectedSemester] = useState(null);

    useEffect(() => {
        if (data && data.length > 0 && selectedSemester === null) {
            setSelectedSemester(data[0].semester);
        }
    }, [data, selectedSemester]);

    const semester = data?.find(s => s.semester === selectedSemester);

    return (
        <DataLoader loading={loading} error={error} data={data}>
            <div className='z-0 flex-col justify-center justify-items-center'>
                <h2 className="text-xl font-bold mb-4">Семестр
                    <select
                        value={selectedSemester || ''}
                        onChange={(e) => setSelectedSemester(Number(e.target.value))}
                        className='focus:outline-none'
                    >
                        {data?.map((semester, semesterIndex) => (
                            <option
                                value={semester.semester}
                                key={semesterIndex}>
                                {semester.semester}
                            </option>
                        ))}
                    </select>
                </h2>
                <div>
                    {semester ? (
                        <table className="table-auto border-collapse border border-gray-300 w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2">Назва дисципліни</th>
                                    <th className="border border-gray-300 px-4 py-2">Кредити</th>
                                    <th className="border border-gray-300 px-4 py-2">Групи</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semester.disciplines.map((discipline) => (
                                    <tr key={discipline._id} className="hover:bg-gray-50">
                                        <td className="border border-gray-300"><Link to={`/discipline/${discipline.disciplineId._id}`} className='block w-full h-full px-4 py-2'>{discipline.disciplineId.name}</Link></td>
                                        <td className="border border-gray-300 px-4 py-2">{discipline.credits}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {discipline.groups.join(', ')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h2>Оберіть семестер</h2>
                    )}

                </div>
            </div>
        </DataLoader>
    );
};

export default CurriculumTable;