import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./components/Header.js";
import Home from "./pages/home.js";
import Book from "./pages/book.js";
import context from "./Context.js";

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={`book/:id`} element={<Book />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  const [search, setSearch] = useState("react");
  const [value, setValue] = useState("");

  const onChangeValue = (e) => setValue(e.target.value);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSearch(value);
  };

  return (
    <context.Provider value={search}>
      <Container>
        <Header
          onSubmit={handleFormSubmit}
          onChangeValue={onChangeValue}
          value={value}
        />
        <Outlet />
      </Container>
    </context.Provider>
  );
}
