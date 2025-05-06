import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchDisciplineInfo = async (disciplineId) => {
    try {
        const disciplineRes = await axios.get(`${backendUrl}/discipline/${disciplineId}`, { withCredentials: true });

        if (disciplineRes.status !== 200) {
            throw new Error('failed to fetch disciplines');
        }
        return disciplineRes.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchProfessorDisciplines = async (professorId) => {
    try {
        const disciplinesRes = await axios.get(`${backendUrl}/disciplines/professor/${professorId}`, { withCredentials: true });

        if (disciplinesRes.status !== 200) {
            throw new Error('failed to fetch professor disciplines')
        }

        return disciplinesRes.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const updateDiscipline = async ({ disciplineId, updatedData }) => {
    try {
        const res = await axios.patch(`${backendUrl}/discipline/upd/${disciplineId}`, updatedData, {
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