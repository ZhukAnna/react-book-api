import React from 'react';

function Book() {
    return <>
            <h2>Some book</h2>

            <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://picsum.photos/300/400" className="img-fluid rounded-start" alt="..."></img>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        </div>
        </>
}

export default Book;