import React, { useContext, useState } from 'react'
import { AppContent } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

// const useGetGroup = ({ groupName }) => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const { backendUrl } = useContext(AppContent);

//     const getGroupData = async () => {
//         try {
//             setLoading(true);
//             setError(null);
//             const groupRes = await axios.get(backendUrl + `/group/${groupName}`, { withCredentials: true });
//             if (groupRes.status !== 200) {
//                 setError('Failed to fetch group data');
//                 toast.error('Failed to fetch group data');
//                 return;
//             }
//             const groupData = groupRes.data;
//             if (!groupData) {
//                 setError('No group data found');
//                 toast.error('No group data found');
//                 return;
//             }
//             return groupData;
//         } catch (error) {
//             setError('Error fetching group data: ' + error.message);
//             toast.error('Error fetching group data: ' + error.message);
//             return;
//         } finally {
//             setLoading(false);
//         }
//     }


//     return {
//         loading,
//         error,
//         getGroupData
//     }
// }


const useGetGroup = ({ groupName }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { backendUrl } = useContext(AppContent);

    const getGroupData = async () => {
        try {
            setLoading(true);
            setError(null);
            const groupRes = await axios.get(backendUrl + `/group/${groupName}`, { withCredentials: true });
            const curatorRes = await axios.get(backendUrl + `/curator/${groupName}`, { withCredentials: true });

            if (groupRes.status !== 200) {
                setError('Failed to fetch group data');
                toast.error('Failed to fetch group data');
                return;
            }
            const groupData = groupRes.data;
            const curatorData = curatorRes.data;
            if (!groupData) {
                setError('No group data found');
                toast.error('No group data found');
                return;
            }
            return {
                groupData,
                curatorData
            };
        } catch (error) {
            setError('Error fetching group data: ' + error.message);
            toast.error('Error fetching group data: ' + error.message);
            return;
        } finally {
            setLoading(false);
        }
    }


    return {
        loading,
        error,
        getGroupData
    }
}


export default useGetGroup