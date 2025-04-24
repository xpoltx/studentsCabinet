import {useEffect, useState} from "react"


const useFetch = ( fetchFunction, autoFetch = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            setData(result);

        } catch (error) {
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    }, []);


    return {data, loading, error, refetch: fetchData, reset};

}

export default useFetch;