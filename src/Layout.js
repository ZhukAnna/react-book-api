import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header.js';
import { Provider } from 'react-redux';
import store from './store';

export default function Layout() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Provider>
  );
}
