import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import api from '../utils/Api';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import PopupWithForm from '../components/Popup/PopupWithForm/PopupWithForm';
import ImagePopup from '../components/Popup/ImagePopup/ImagePopup';
import EditProfilePopup from '../components/EditProfilePopup/EditProfilePopup'
import EditAvatarPopup from '../components/EditAvatarPopup/EditAvatarPopup'
import AddPlacePopup from '../components/AddPlacePopup/AddPlacePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAgreementPopupOpen, setIsAgreementPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [card, setCard] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .catch((err) => console.log(err))
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards.map((card) => (card)
        ));
      })
      .catch((err) => console.log(err))
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAgreementClick(card) {
    setIsAgreementPopupOpen(true);
    setCard(card);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }
  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards(cards.filter((cards) => cards._id !== card._id));
      })
      .then(closeAllPopups())
      .catch((err) => console.log(err));
  }
  function handleUpdateUser(dataUser) {
    api
      .editUserData(dataUser)
      .catch((err) => console.log(err))
      .then((res) => setCurrentUser(res))
      .then(closeAllPopups())
      .catch((err) => console.log(err))
  }
  function handleUpdateAvatar(dataAvatar) {
    api
      .changeAvatar(dataAvatar)
      .catch((err) => console.log(err))
      .then((res) => setCurrentUser(res))
      .then(closeAllPopups())
      .catch((err) => console.log(err))
  }
  function handleAddPlace(newCard) {
    api
      .addCard(newCard)
      .catch((err) => console.log(err))
      .then((res) => setCards([res, ...cards]))
      .then(closeAllPopups())
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAgreementPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardAgreement={handleCardDelete}
        // onSubmit={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

        <EditAvatarPopup
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          isOpen={isAgreementPopupOpen}
          onClose={closeAllPopups}
          name="agreement"
          title="Вы уверены?"
          buttonText="Да"
          card={card}
          // onCardAgreement={handleAgreementClick}
          onSubmit={handleCardDelete}
        >
        </PopupWithForm>


        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;