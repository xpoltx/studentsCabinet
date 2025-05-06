import React, { useState } from 'react'

const useAuthService = (authFunction) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const auth = async () => {
        try {
            setLoading(true);
            setError(null);
            await authFunction();
        } catch (error) {
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    return {loading, error, auth}
}

export default useAuthService