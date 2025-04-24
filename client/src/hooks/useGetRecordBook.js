import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AppContent } from '../context/AppContext'
import axios from 'axios'

const useGetRecordBook = ({studentId}) => {
    
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null);

    const {backendUrl} = useContext(AppContent);

    const getRecordBookData = async()=>{
        try {
            setLoading(true);
            setError(null);
            const recordBookRes = await axios.get(backendUrl + `/record-book/student/${studentId}`, { withCredentials: true });
            if(recordBookRes.status !== 200) {
                setError('Failed to fetch record book data');
                toast.error('Failed to fetch record book data');
                return;
            }
            const recordBookData = recordBookRes.data;
        
            const disciplines = recordBookData.map(async(e) =>{
                const disciplineRes = await axios.get(backendUrl + `/discipline/${e.disciplineId}`, { withCredentials: true });
                if(disciplineRes.status !== 200) {
                    setError('Failed to fetch discipline data');
                    toast.error('Failed to fetch discipline data');
                    return;
                }
                return {
                    disciplineName: disciplineRes.data.name,
                    disciplineId: e.disciplineId,
                    grade: e.grade,
                    debt: e.debt,
                };
            });

            const disciplinesData = await Promise.all(disciplines);

            return disciplinesData;

        } catch (error) {
            setError('Error fetching record book data: ' + error.message);
            toast.error('Error fetching record book data: ' + error.message);
            return;
        }
        finally{
            setLoading(false);
        }
    };

  return {loading, error, getRecordBookData};
}

export default useGetRecordBook