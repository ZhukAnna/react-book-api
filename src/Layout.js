import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header.js';
import context from './Context.js';

export default function Layout() {
  const [search, setSearch] = useState('react');
  const [value, setValue] = useState('');

  const onChangeValue = (e) => setValue(e.target.value);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSearch(value);
  };

  return (
    <context.Provider value={search}>
      <Container>
        <Header onSubmit={handleFormSubmit} onChangeValue={onChangeValue} value={value} />
        <Outlet />
      </Container>
    </context.Provider>
  );
}
