import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchStudentsByDiscipline = async ({ id }) => {
    try {
        const res = await axios.get(`${backendUrl}/record-book/discipline/${id}`, { withCredentials: true });

        if (res.status !== 200) {
            throw new Error('Failed to update discipline');
        }

        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchGroup = async ({groupName}) =>{
    try {
        const group = await axios.get(backendUrl + `/group/${groupName}`, {withCredentials: true});
        const curator = await axios.get(backendUrl + `/curator/${groupName}`, {withCredentials: true});
        if(group.status !== 200 ){
            throw new Error('failed to fetch group data');
        }
        if (curator.status !== 200) {
            throw new Error('failed to fetch curator data');
        }
        return {
            groupData: group.data,
            curatorData: curator.data
        }

    } catch (error) {
        throw new Error(error);
    }
}