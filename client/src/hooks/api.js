import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchUserFullname = async (id) => {
    try {
        const res = await axios.get(`${backendUrl}/user/${id}`, {withCredentials: true});
        
        if(res.status !==200){
            throw new Error('failed to fetch user fullname');
        }
        //console.log(res.data.fullname)    
        return res.data.fullname;
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchDisciplineInfo = async (disciplineId) => {
    try {
        const disciplineRes = await axios.get(`${backendUrl}/discipline/${disciplineId}`, {withCredentials: true});
        
        if(disciplineRes.status !==200){
            throw new Error('failed to fetch disciplines');
        }
        //console.log(disciplineRes.data)    
        return disciplineRes.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchProfessorDisciplines = async (professorId) =>{
    try {
        const disciplinesRes = await axios.get(`${backendUrl}/disciplines/professor/${professorId}`, {withCredentials: true});
        
        if(disciplinesRes.status !== 200){
            throw new Error('failed to fetch professor disciplines')
        }
        // console.log(disciplinesRes.data)
        return disciplinesRes.data;
    }catch (error) {
        throw new Error(error);
    }
}

export const updateDiscipline = async({disciplineId, updatedData}) => {
    try {
        const res = await axios.patch(`${backendUrl}/discipline/upd/${disciplineId}`, updatedData, {
            withCredentials: true
        });

        if(res.status !== 200){
            throw new Error('Failed to update discipline');
        }

        return res.data;

    } catch (error) {
        throw new Error(error);
    }
}

export const fetchStudentsByDiscipline = async({ id }) =>{
    try {
        const res = await axios.get(`${backendUrl}/record-book/discipline/${id}`, {withCredentials: true});

        if(res.status !== 200){
            throw new Error('Failed to update discipline');
        }

        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchStudentRecord = async({ id }) =>{
    try {
        const res = await axios.get(`${backendUrl}/record-book/student/${id}`, {withCredentials: true});

        if(res.status !== 200){
            throw new Error('Failed to update discipline');
        }

        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const updateGrade = async({studentId, updatedGrade}) => {
    try {
        const updatedData = {
            grade: updatedGrade,
            debt: updatedGrade <= 60
        };
        
        const res = await axios.patch(`${backendUrl}/record-book/student/${studentId}/upd`, updatedData, {
            withCredentials: true
        });

        if(res.status !== 200){
            throw new Error('Failed to update discipline');
        }

        return res.data;

    } catch (error) {
        throw new Error(error);
    }
}