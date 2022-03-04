import React from 'react';
import './Filter.css';

function Filter() {
    return (
        <div className='filter'>
            <div>
                <label for="category" className="form-label filter_label">Category</label>
                <select className="filter_select" ariaLabel="category" id="category">
                <option>all</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
                </select>
            </div>
            <div>
                <label for="sort" className="form-label filter_label">Sort by</label>
                <select className="filter_select" ariaLabel="sort" id="sort">
                <option  value="relevance">relevance</option>
                <option value="newest">newest</option>
                </select>
            </div>
        </div>      
        )
}

export default Filter;