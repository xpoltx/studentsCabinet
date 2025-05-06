import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchCurriculumData = async ({group}) => {
    try {
        const curriculumRes = await axios(backendUrl + `/${group}/curriculum`, {withCredentials: true});
        if(curriculumRes.status !== 200){
            throw new Error('failed to fetch curriculum data');
        }
        return curriculumRes.data;
    } catch (error) {
        throw new Error(error);
    }
}
