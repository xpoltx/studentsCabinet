import React, { useEffect, useState } from 'react'
import useGetCurriculum from '../hooks/useGetCurriculum';
import { toast } from 'react-toastify';
import SemesterPanel from './SemesterPanel';
import DisciplineCard from './DisciplineCard';


const CurriculumTable = ({ group }) => {
    const [curriculum, setCurriculum] = useState([]);
    const { loading, error, getCurriculumData } = useGetCurriculum({ group });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCurriculumData();
                setCurriculum(data);
            } catch (error) {
                toast.error('Error fetching record book data' + error);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;
    }
    if (error) {
        return <div className='flex justify-center items-center h-screen'>{error}</div>;
    }
    
    return(
        <div className='z-0 flex-col justify-center justify-items-center'>
            <div className=" z-0 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-10/12 pb-20">
            {curriculum.map((discipline,index)=>
                <DisciplineCard key={index} disciplineData={discipline}/>
            )}
            </div>
            
            <SemesterPanel/>
        </div>
    )
}

export default CurriculumTable