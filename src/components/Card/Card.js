import React from 'react';
import './Card.css';

function Card(props) {
    const link = props.link;
    const name = props.name;
    const likes = props.likes;


    function handleClickImage() {
        props.onCardClick(props.card);
    }

    return (
        <>
            <article id="template" className="card">
                <button type="button" className="card__delete-button"></button>
                <img onClick={handleClickImage} className="card__photo" src={link} alt={name} />
                <div className="card__place">
                    <h2 className="card__tittle">{name}</h2>
                    <div className="card__container">
                        <button type="button" aria-label="like" className="card__like-button"></button>
                        <p className="cards__likes-scorer">{likes}</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card;