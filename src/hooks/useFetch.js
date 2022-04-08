import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ooops! Couldn't fetch the data");
        }
        return res.json();
      })
      .then((newData) => {
        setData(data ? {...data, items: data.items?.concat(newData.items)} : newData);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        
        setLoading(false);
      });
  }, [url]);
//console.log(data);
  return { data, loading, error };
};

export default useFetch;
