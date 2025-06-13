import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


export const fetchAccountData = async ({ role, id }) => {
    try {
        let endpoint = backendUrl;
        if (role === 'student') {
            endpoint += `/student/${id}`;
        } else if (role === 'professor') {
            endpoint += `/professor/${id}`;
        } else {
            throw new Error('invalid role provided');
        }

        const response = await axios.get(endpoint, { withCredentials: true });
        if (response.status !== 200) {
            throw new Error('failde to fetch account data');
        }
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}