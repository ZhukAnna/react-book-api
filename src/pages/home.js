import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../components/Filter';
import Result from '../components/Result';
import CardsList from '../components/CardsList';
import Button from '../components/Button';
import useFetch from '../hooks/useFetch.js';
import Loader from '../assets/loader';
import { loadMoreAction } from '../store/actions.js';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = (props) => {
  const dispatch = useDispatch();
  const { data, search, startId, books, sorting, numResults, filteredData } = useSelector(
    (state) => state
  );

  const { loading, error } = useFetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${sorting}&key=${API_KEY}&maxResults=30&startIndex=${startId}`
  );

  return (
    <div>
      <Filter />
      {error && <div> {error} </div>}
      {data && (
        <>
          <Result>{numResults} results</Result>
          <CardsList data={filteredData ? filteredData : books} />
          <div className="d-flex justify-content-center">
            {numResults > 30 && books.length < data.totalItems && (
              <Button type="button" onClick={() => dispatch(loadMoreAction())}>
                Load More
              </Button>
            )}
          </div>
        </>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default Home;
