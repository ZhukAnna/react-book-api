import React from "react";
import styled from "styled-components";

import Card from "./Card";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  margin-bottom: 1em;
`;

export default function CardsLists(props) {
  const cards = props.data?.items.map((book) => (
    <Card
      key={book.id}
      id={book.id}
      img={
        book.volumeInfo.imageLinks?.thumbnail ||
        "https://via.placeholder.com/180x250/566273/FFFFFF?text=no%20image"
      }
      title={book.volumeInfo.title}
      authors={book.volumeInfo.authors}
      category={book.volumeInfo.categories}
    />
  ));

  return <CardsWrapper>{cards}</CardsWrapper>;
}
