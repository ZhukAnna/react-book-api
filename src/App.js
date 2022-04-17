import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout.js';
import Home from './pages/home.js';
import Book from './pages/book.js';
import Nopage from './pages/404.js';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={`book/:id`} element={<Book />} />
      </Route>
      <Route path={'*'} element={<Nopage />} />
    </Routes>
  );
}
