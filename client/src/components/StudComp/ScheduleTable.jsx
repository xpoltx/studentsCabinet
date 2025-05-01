import React from 'react'
import useFetch from '../../hooks/useFetch'
import { fetchCurriculumData } from '../../hooks/api'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ScheduleTable = ({ group }) => {
    const { data, loading, error } = useFetch(() => fetchCurriculumData({ group }));

    console.log(data);
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;
    }

    if (error) {
        toast.error(error.message || 'Error fetching curriculum data');
        return <div className='flex justify-center items-center h-screen'>{error.message || 'Error'}</div>;
    }

    const processingSchedule = (disciplines) =>{
        const schedule = {};
        //  const days =['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

        disciplines.forEach((discipline)=>{
            const {day, startTime, endTime} = discipline.schedule;
            const time = `${startTime} - ${endTime}`;

            if (!schedule[time]) {
                schedule[time] = { Mon: '', Tue: '', Wed: '', Thu: '', Fri: '' };
            }

            schedule[time][day] = discipline.disciplineId.name;

        });

        return Object.entries(schedule).map(([timeA], [timeB]) => timeA.localeCompare(timeB));
    }

    return (
        <div className='z-0 flex-col justify-center justify-items-center'>
            {data?.map((semester, semesterIndex) => (
                <div key={semesterIndex} className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Семестр {semester.semester}</h2>
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Час</th>
                                <th className="border border-gray-300 px-4 py-2">Понеділок</th>
                                <th className="border border-gray-300 px-4 py-2">Вівторок</th>
                                <th className="border border-gray-300 px-4 py-2">Середа</th>
                                <th className="border border-gray-300 px-4 py-2">Четвер</th>
                                <th className="border border-gray-300 px-4 py-2">П'ятниця</th>
                            </tr>
                        </thead>
                        <tbody>
                            {processingSchedule(semester.disciplines).map(([time, days],index)=>(
                                <tr key={index}>
                                    <td>{time}</td>
                                    <td>{days.Mon}</td>
                                    <td>{days.Tue}</td>
                                    <td>{days.Wed}</td>
                                    <td>{days.Thu}</td>
                                    <td>{days.Fri}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default ScheduleTable


// {/* {semester.disciplines.map((discipline) => (
//                                 <tr key={discipline._id} className="hover:bg-gray-50">
//                                     <td className="border border-gray-300"><Link to={`/discipline/${discipline.disciplineId._id}`} className='block w-full h-full px-4 py-2'>{discipline.disciplineId.name}</Link></td>
//                                     <td className="border border-gray-300 px-4 py-2">{discipline.credits}</td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {discipline.groups.join(', ')}
//                                     </td>
//                                 </tr>
//                             ))} */}