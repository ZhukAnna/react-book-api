import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="card">
            <img src="https://picsum.photos/300/400" className="card-img-top card_img" alt="..."></img>
            <div className="card-body">
                <h5 className="card_title">Название книги</h5>
                <h6 className="card_subtitle">название категории</h6>
                <p className="card_text">Автор</p>
            </div>
        </div>
    )
}

export default Card;