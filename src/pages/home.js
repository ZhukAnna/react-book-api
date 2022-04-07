import React, { useEffect, useState, useContext } from 'react';

import context from '../Context.js';
import Filter from '../components/Filter';
import CardsList from '../components/CardsList';
import Button from '../components/Button';
import getBooks from '../utils/googleBooksAPI.js';
import Loader from '../assets/loader';
import Result from '../components/Result';


const Home = (props) => {
  const search = useContext(context);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startId, setstartId] = useState(0);
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');

  const fetchData = (req, sort) => {
    setLoading(true);
    getBooks(req, sort)
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(search, sorting);
  }, [search, sorting]);

  const handlerClick = () => {
    setstartId(startId + 30);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
/*     console.log(data);
    console.log(category);
    if (category !== 'all')
      setData({
        ...data,
        items: data.items.filter((book) =>
          book.volumeInfo.categories?.map((i) => i.toLowerCase()).includes(category)
        ),
      }); */
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
          <CardsList data={data.items} />
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
