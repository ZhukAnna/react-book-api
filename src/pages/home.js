import React from 'react';
import Filter from '../components/Filter';
import Card from '../components/Card';

const Search = () => {
    return (
            <div>
                <Filter />
                <div  className="d-flex justify-content-center">2946 results</div>
                <div className="d-flex justify-content-between flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div  className="d-flex justify-content-center">
                    <button className="btn btn-outline-secondary">Load More</button>
                </div>
            </div>
    )
}

export default Search;