import React from 'react';
import styled from 'styled-components';
import Filter from '../components/Filter';
import Card from '../components/Card';
import Button from '../components/Button';

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    margin-bottom: 1em;
`;
const Result = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    color: #A9A9C4;
    font-family: 'Nunito';
    font-size: 14px;
`;

const Home = () => {
    return (
            <div>
                <Filter />
                <Result>2946 results</Result>
                <CardsWrapper>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardsWrapper>
                <div  className="d-flex justify-content-center">
                    <Button>Load More</Button>
                </div>
            </div>
    )
}

export default Home;