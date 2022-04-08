import React, { useEffect, useState, useContext } from 'react';

import context from '../Context.js';
import Filter from '../components/Filter';
import CardsList from '../components/CardsList';
import Button from '../components/Button';
import useFetch from '../hooks/useFetch.js';
import Loader from '../assets/loader';
import Result from '../components/Result';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = (props) => {
  const search = useContext(context);
  const [startId, setstartId] = useState(0);
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const [url, setUrl] = useState(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${sorting}&key=${API_KEY}&maxResults=30`
  );
  const { data, loading, error } = useFetch(url);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setUrl(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${sorting}&key=${API_KEY}&maxResults=30&startIndex=${startId}`
    );
  }, [search, sorting, startId]);

  const handlerClick = () => {
    setstartId(startId + 30);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);

    if (e.target.value === 'all') {
      setFilteredData(data);
    } else {
      setFilteredData({
        ...data,
        items: data.items.filter((book) =>
          book.volumeInfo.categories?.map((i) => i.toLowerCase()).includes(e.target.value)
        ),
      });
    }
  };

  const onChangeSorting = (e) => setSorting(e.target.value);

  return (
    <div>
      <Filter
        category={category}
        sorting={sorting}
        onChangeCategory={onChangeCategory}
        onChangeSorting={onChangeSorting}
      />
      {error && <div> {error} </div>}
      {loading && <Loader />}
      {data && (
        <>
          <Result>{data.totalItems || 0} results</Result>
          <CardsList data={filteredData ? filteredData.items : data.items} />
          <div className="d-flex justify-content-center">
            <Button type="button" onClick={handlerClick}>
              Load More
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
