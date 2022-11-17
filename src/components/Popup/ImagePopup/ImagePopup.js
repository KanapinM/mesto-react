import React from 'react';
import './ImagePopup.css'


function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card ? 'popup_open' : ''}`} >
            <div className="popup__container-image">
                <button onClick={props.onClose} type="button" className="popup__close-button popup__close-button_image"></button>
                <img className="popup__place-image" src={`${props.card ? props.card.link : '#'}`} alt="" name="link" />
                <p className="popup__place-name" name="name">{`${props.card ? props.card.name : ''}`}
                </p>
            </div>
        </div>
    );
}

export default ImagePopup;