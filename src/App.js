import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/Header.js';
import Home from './pages/home.js';
import Book from './pages/book.js';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path={`book/:id`} element={<Book/>}/>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <Container>
      <Header />
      <div>
        <Outlet />
      </div>
    </Container>
  )
}
