import React, { useContext, useState } from 'react'
import { AppContent } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const useGetCurriculum = ({ group }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { backendUrl } = useContext(AppContent);

    const getCurriculumData = async()=>{
        try {
            setLoading(true);
            setError(null);
            const curriculumRes = await axios(backendUrl + `/${group}/curriculum`, { withCredentials: true });
            if(curriculumRes.status !== 200) {
                setError('Failed to fetch curriculum data');
                toast.error('Failed to fetch curriculum data');
                return;
            }
            const curriculumData = curriculumRes.data;
            const disciplinesArray = curriculumData.flatMap((semester)=> semester.disciplines);
            const disciplines = await Promise.all(disciplinesArray.map(async(e)=>{
                const disciplinesRes = await axios(backendUrl + `/discipline/${e.disciplineId}`, { withCredentials: true });
                if(disciplinesRes.status !== 200) {
                    setError('Failed to fetch discipline data');
                    toast.error('Failed to fetch discipline data');
                    return;
                }
                return {
                    name: disciplinesRes.data.name,
                    disciplineId: e.disciplineId,
                }
            })); 
         
            return disciplines;
        } catch (error) {
            setError('Error fetching curriculum data: ' + error.message);
            toast.error('Error fetching curriculum data: ' + error.message); 
            return;   
        }finally{
            setLoading(false);
        }
    }


    return {loading, error, getCurriculumData};
}

export default useGetCurriculum