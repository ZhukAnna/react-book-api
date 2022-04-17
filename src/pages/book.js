import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getBook from '../utils/googleBooksAPI';
import Loader from '../assets/loader';
import '../components/Card.css';

export default function Book() {
  let { id } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBook(id)
      .then((data) => {
        setBooks(data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const book = books?.filter((item) => item.id === id)[0];
  const img = book?.volumeInfo.imageLinks?.thumbnail || '',
    title = book?.volumeInfo.title,
    authors = book?.volumeInfo.authors,
    category = book?.volumeInfo.categories,
    description = book?.volumeInfo.description;

  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="card" style={{ width: '100%', flexDirection: 'row' }}>
      {loading && <Loader />}
      {books && (
        <>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img} className="img-fluid rounded-start card_img" alt={title}></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card_title">{title}</h2>
                <h6 className="card_subtitle">{category}</h6>
                <p className="card-text">
                  <small>{authors}</small>
                </p>
                <p className="card_text">{description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
