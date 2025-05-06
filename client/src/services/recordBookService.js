import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchRecordBook = async ({studentId}) =>{
    try {
        const res = await axios.get(backendUrl + `/record-book/student/${studentId}`, {withCredentials: true});
        if(res.status !== 200){
            throw new Error('failed to fetch record book data');
        }
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const updateGrade = async ({ studentId, disciplineId, updatedGrade }) => {
    try {

        const updatedData = {
            grade: updatedGrade,
            debt: updatedGrade <= 60
        };


        const res = await axios.patch(`${backendUrl}/record-book/upd/discipline/${disciplineId}/student/${studentId}`, updatedData, {
            withCredentials: true
        });

        if (res.status !== 200) {
            throw new Error('Failed to update discipline');
        }

        return res.data;

    } catch (error) {
        throw new Error(error);
    }
}

export const fetchStudentRecord = async ({ studentId, disciplineId }) => {
    try {
        const res = await axios.get(`${backendUrl}/record-book/discipline/${disciplineId}/student/${studentId}`, { withCredentials: true });

        if (res.status !== 200) {
            throw new Error('Failed to update discipline');
        }

        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchStudentRecords = async ({ id }) => {
    try {
        const res = await axios.get(`${backendUrl}/record-book/student/${id}`, { withCredentials: true });

        if (res.status !== 200) {
            throw new Error('Failed to update discipline');
        }

        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

