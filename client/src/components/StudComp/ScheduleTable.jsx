// import React from 'react'
// import useFetch from '../../hooks/useFetch'
// import { fetchCurriculumData } from '../../services/curriculumService'; 
// import { toast } from 'react-toastify';

// const ScheduleTable = ({ group }) => {
//     const { data, loading, error } = useFetch(() => fetchCurriculumData({ group }));

//     console.log(data);
//     if (loading) {
//         return <div className='flex justify-center items-center h-screen'>Loading...</div>;
//     }

//     if (error) {
//         toast.error(error.message || 'Error fetching curriculum data');
//         return <div className='flex justify-center items-center h-screen'>{error.message || 'Error'}</div>;
//     }

//     const processingSchedule = (disciplines) =>{
//         const schedule = {};
//         //  const days =['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

//         disciplines.forEach((discipline)=>{
//             const {day, startTime, endTime} = discipline.schedule;
//             const time = `${startTime} - ${endTime}`;

//             if (!schedule[time]) {
//                 schedule[time] = { Mon: '', Tue: '', Wed: '', Thu: '', Fri: '' };
//             }

//             schedule[time][day] = discipline.disciplineId.name;

//         });

//         return Object.entries(schedule).map(([timeA], [timeB]) => timeA.localeCompare(timeB));
//     }

//     return (
//         <div className='z-0 flex-col justify-center justify-items-center'>
//             {data?.map((semester, semesterIndex) => (
//                 <div key={semesterIndex} className="mb-8">
//                     <h2 className="text-xl font-bold mb-4">Семестр {semester.semester}</h2>
//                     <table className="table-auto border-collapse border border-gray-300 w-full">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="border border-gray-300 px-4 py-2">Час</th>
//                                 <th className="border border-gray-300 px-4 py-2">Понеділок</th>
//                                 <th className="border border-gray-300 px-4 py-2">Вівторок</th>
//                                 <th className="border border-gray-300 px-4 py-2">Середа</th>
//                                 <th className="border border-gray-300 px-4 py-2">Четвер</th>
//                                 <th className="border border-gray-300 px-4 py-2">П'ятниця</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {processingSchedule(semester.disciplines).map(([time, days],index)=>(
//                                 <tr key={index}>
//                                     <td>{time}</td>
//                                     <td>{days.Mon}</td>
//                                     <td>{days.Tue}</td>
//                                     <td>{days.Wed}</td>
//                                     <td>{days.Thu}</td>
//                                     <td>{days.Fri}</td>

//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default ScheduleTable


// // {/* {semester.disciplines.map((discipline) => (
// //                                 <tr key={discipline._id} className="hover:bg-gray-50">
// //                                     <td className="border border-gray-300"><Link to={`/discipline/${discipline.disciplineId._id}`} className='block w-full h-full px-4 py-2'>{discipline.disciplineId.name}</Link></td>
// //                                     <td className="border border-gray-300 px-4 py-2">{discipline.credits}</td>
// //                                     <td className="border border-gray-300 px-4 py-2">
// //                                         {discipline.groups.join(', ')}
// //                                     </td>
// //                                 </tr>
// //                             ))} */}

import React, { useState } from 'react'
import { fetchCurriculumData } from '../../services/curriculumService'
import useFetch from '../../hooks/useFetch'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import 'moment/locale/uk'


import 'react-big-calendar/lib/css/react-big-calendar.css';

const ScheduleTable = ({ group }) => {
    // const { data, loading, error } = useFetch(() => fetchCurriculumData({ group }))
    // console.log(data);
    moment.locale('uk')

    const localizer = momentLocalizer(moment)

    const messages = {
      allDay: 'Весь день',
      previous: 'Попередній',
      next: 'Наступний',
      today: 'Сьогодні',
      month: 'Місяць',
      work_week: 'Тиждень',
      day: 'День',
      // agenda: 'Cписок подій',
      date: 'Дата',
      time: 'Час',
      event: 'Подія',
      showMore: (total) => `+ (${total}) Подій`,
    }

    // if (loading) {
    //     return <div className='flex justify-center items-center h-screen'>Loading...</div>
    // }
    // if (error) {
    //     return <div className='flex justify-center items-center h-screen'>{error}</div>
    // }

    // if (!data) {
    //     return <div>Завантаження інформації про дисципліну...</div>;
    // }
    // const tempData = data[0].disciplines[0];
    const events = [
        {
          title: 'Spring Semester Begins',
          start: new Date(2025, 4, 10),
          end: new Date(2025, 4, 10),
        },
        {
          title: 'Orientation for New Students',
          start: new Date(2025, 4, 12, 9, 0),
          end: new Date(2025, 4, 12, 12, 0),
        },
        {
          title: 'Final Exams Week',
          start: new Date(2025, 4, 2),
          end: new Date(2025, 4, 6),
        },
        {
          title: 'Graduation Day 🎓',
          start: new Date(2025, 4, 10, 0),
          end: new Date(2025, 4, 13, 0),
        },
      ]
   
      


    return (
        <Calendar
            localizer={localizer}
            events={events}
            views={['work_week', 'day']}
            defaultView='work_week'
            style={{ width: 700 }}
            culture='uk'
            messages={messages}
            timeslots={1}
            step={60}
            min={new Date(2025, 0, 0, 8, 0)}
            max={new Date(2025, 0, 0, 17, 0)}
        
        />
    );
}

export default ScheduleTable