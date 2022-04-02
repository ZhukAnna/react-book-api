const API_KEY = process.env.REACT_APP_API_KEY;

const getBooks = (query, sorting = "relevance", startId = 0) => {
  if (!query) query = "react";
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sorting}&key=${API_KEY}&maxResults=30&startIndex=${startId}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Ooops! Couldn't fetch the data");
    }
    return res.json();
  });
};

export default getBooks;
