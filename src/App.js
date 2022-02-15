import React from 'react';

import { Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header.js';
import Search from './pages/home.js';
import Book from './pages/book.js';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Search/>}/>
        <Route path={'book'} element={<Book/>}/>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
  )
}

export default App;
