import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAxios = ({ param }) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (param) => {
        try {
            setIsLoading(true);
            const perPage = 30;
            const url = `https://api.unsplash.com/search/photos?page=1&query=${param}&per_page=${perPage}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
            const res = await axios.get(url);
            setResponse(res.data.results);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(param);
    }, [param]);

    return {
        response,
        isLoading,
        error,
        fetchData: (url) => fetchData(url),
    };
};

export default useAxios;
