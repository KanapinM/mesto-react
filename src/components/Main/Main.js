import React from 'react';
import './Main.css';
import api from '../../utils/Api';
import Card from '../Card/Card';




function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .catch((err) => console.log(err))
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);

                setCards(cards.map((card) => ({
                    cardId: card._id,
                    link: card.link,
                    name: card.name,
                    likes: card.likes.length
                })
                ))
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__column">
                    <div onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar"></div>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{userName ? userName : 'Идентификация...'}</h1>
                            <button onClick={props.onEditProfile} type="button" aria-label="edit" className="profile__edit-button"></button>
                        </div>
                        <p className="profile__about">{userDescription ? userDescription : 'Получение данных...'}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" aria-label="add" className="profile__add-button"></button>
            </section>
            <div className="cardsContainer">
                {cards.map(({ ...card }) =>
                    <Card onCardClick={props.onCardClick} card={card} key={card.cardId} {...card} />
                )}
            </div>
        </main>
    );
}

export default Main;