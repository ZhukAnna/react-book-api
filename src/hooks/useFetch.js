import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAction } from '../store/actions.js';

const useFetch = (url) => {
  const dispatch = useDispatch();

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
      .then((data) => {
        dispatch(fetchAction(data));
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);

        setLoading(false);
      });
  }, [url]);
  return { loading, error };
};

export default useFetch;
