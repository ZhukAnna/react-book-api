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
`

const Home = () => {
    return (
            <div>
                <Filter />
                <div  className="d-flex justify-content-center">2946 results</div>
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