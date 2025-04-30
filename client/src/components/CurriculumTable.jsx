// import React, { useEffect, useState } from 'react'
// import useGetCurriculum from '../hooks/useGetCurriculum';
// import { toast } from 'react-toastify';
// import SemesterPanel from './SemesterPanel';
// import DisciplineCard from './DisciplineCard';
// import useFetch from '../hooks/useFetch';
// import { fetchCurriculumData } from '../hooks/api';


// const CurriculumTable = ({ group }) => {
//     const [data, loading, error] = useFetch(() => fetchCurriculumData({group})); 
    
//     console.log(data);

//     // const [curriculum, setCurriculum] = useState([]);
//     // const { loading, error, getCurriculumData } = useGetCurriculum({ group });
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const data = await getCurriculumData();
//     //             setCurriculum(data);
//     //         } catch (error) {
//     //             toast.error('Error fetching record book data' + error);
//     //         }
//     //     }
//     //     fetchData();
//     // }, [])

//     if (loading) {
//         return <div className='flex justify-center items-center h-screen'>Loading...</div>;
//     }
//     if (error) {
//         toast.error(error);
//         return <div className='flex justify-center items-center h-screen'>{error}</div>;
//     }
    
//     return(
//         <div className='z-0 flex-col justify-center justify-items-center'>
//             {/* <div className=" z-0 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-10/12 pb-20">
//             {data.map((discipline,index)=>
//                 <DisciplineCard key={index} disciplineData={discipline}/>
//             )}
//             </div> */}
            
//             <SemesterPanel/>
//         </div>
//     )
// }

// export default CurriculumTable

import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch'; 
import { fetchCurriculumData } from '../hooks/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const CurriculumTable = ({ group }) => {
    const { data, loading, error } = useFetch(() => fetchCurriculumData({ group }));

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;
    }

    if (error) {
        toast.error(error.message || 'Error fetching curriculum data');
        return <div className='flex justify-center items-center h-screen'>{error.message || 'Error'}</div>;
    }

    return (
        <div className='z-0 flex-col justify-center justify-items-center'>
            {data?.map((semester, semesterIndex) => (
                <div key={semester._id} className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Семестр {semester.semester}</h2>
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
                </div>
            ))}
        </div>
    );
};

export default CurriculumTable;