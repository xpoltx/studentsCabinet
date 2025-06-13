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


export const fetchCurriculumDataExample = async () => {
    try {
        const curriculumRes = await axios(backendUrl + `/curriculum/68261c559c0f62e63bf046f8`, {withCredentials: true});
        if(curriculumRes.status !== 200){
            throw new Error('failed to fetch curriculum data');
        }
        return curriculumRes.data;
    } catch (error) {
        throw new Error(error);
    }
}