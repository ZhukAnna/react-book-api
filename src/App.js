import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './pages/home.js';
import Book from './pages/book.js';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={`book/:id`} element={<Book />} />
      </Route>
    </Routes>
  );
}
