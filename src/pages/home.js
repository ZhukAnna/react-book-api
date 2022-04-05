import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import context from "../Context.js";
import Filter from "../components/Filter";
import CardsList from "../components/CardsList";
import Button from "../components/Button";
import getBooks from "../utils/googleBooksAPI.js";
import Loader from "../assets/loader";

const Result = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  color: #a9a9c4;
  font-family: "Nunito";
  font-size: 14px;
`;

const Home = (props) => {
  const search = useContext(context);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startId, setstartId] = useState(0);
  const [category, setCategory] = useState("all");
  const [sorting, setSorting] = useState("relevance");

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

  const onChangeCategory = (e) => setCategory(e.target.value);

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
          <Result>{data.totalItems} results</Result>
          <CardsList data={data} />
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
