const API_KEY = process.env.REACT_APP_API_KEY;

const getBooks = (query = "react", sorting = "relevance", numResults = 30) => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sorting}&maxResults=${numResults}&key=${API_KEY}`
  );
};

export default getBooks;
