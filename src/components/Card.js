import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ id, img, title, authors, category}) {

    if (!img) img=`https://picsum.photos/seed/${id}/180/240?grayscale&blur=8`;
    if (category) category = category.slice(0,1);

    return (
        <Link to={`/Book/${id}`} className="card card--link" data-id={id}>
            <img src={img} className="card-img-top card_img" alt={title}></img>
            <div className="card-body">
                <h5 className="card_title">{title}</h5>
                <h6 className="card_subtitle">{category}</h6>
                <p className="card_text">{authors?.join(', ')}</p>
            </div>
        </Link>
    )
}

export default Card;