const API_KEY = process.env.REACT_APP_API_KEY;

const getBook = (query) => {
  if (!query) query = 'react';
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Ooops! Couldn't fetch the data");
      }
      return res.json();
    }
  );
};

export default getBook;
