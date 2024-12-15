import { useState, useCallback } from "react";
import axios from "axios";

const useAxiosRequest = (baseUrl= "http://localhost:3001") => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async ({ method, url = "", body = null, headers = {} }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios({
                method,
                url: `${baseUrl}${url}`,
                data: body,
                headers,
            });
            setData(response.data);
            return response.data;
        } catch (err) {
            setError(err.message || "Something went wrong");
            console.error(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [baseUrl]);

    const create = (url, body, headers = {}) =>
        request({ method: "POST", url, body, headers });

    const read = (url = "", headers = {}) =>
        request({ method: "GET", url, headers });

    const update = (url, body, headers = {}) =>
        request({ method: "PATCH", url, body, headers });

    const remove = (url, headers = {}) =>
        request({ method: "DELETE", url, headers });

    return { data, loading, error, create, read, update, remove };
};

export default useAxiosRequest;