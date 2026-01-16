import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const useGetApiQuery = (urlPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    axiosInstance
      .get(urlPath)
      .then((res) => {
        if (isMounted) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [urlPath]);

  return { data, loading, error };
};

export default useGetApiQuery;
