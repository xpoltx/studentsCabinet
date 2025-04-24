import React, { useState } from 'react'

const useMutation = (mutationFunction) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const mutate = async(fields) =>{
        try {
            setLoading(true);
            setError(null);

            const result = await mutationFunction(fields);
            setData(result);

            return result;

        } catch (error) {
            setError(error);
            throw error;
        }finally{
            setLoading(false);
        }
    }

    return {mutate, loading, error, data};
}

export default useMutation