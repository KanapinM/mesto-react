import React from "react";
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import PopupWithForm from '../components/Popup/PopupWithForm/PopupWithForm';
import ImagePopup from '../components/Popup/ImagePopup/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard({
      card: true,
      link: card.link,
      name: card.name
    });
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
      >
        <>
          <input type="text" className="popup__input popup__input_type_name" id="name-input"
            placeholder="Ваше Имя" required minLength="2" maxLength="40" name="name" />
          <span className="popup__input-error name-input-error"></span>

          <input type="text" className="popup__input popup__input_type_about" id="about-input"
            placeholder="Интересы" required minLength="2" maxLength="200" name="about" />
          <span className="popup__input-error about-input-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-place"
        title="Новое место"
        buttonText="Создать"
      >
        <>
          <input type="text" name="name" className="popup__input popup__input_type_place" id="place-input"
            placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__input-error place-input-error"></span>

          <input type="url" name="link" className="popup__input popup__input_type_photo" id="href-input" required
            placeholder="Ссылка на картинку" />
          <span className="popup__input-error href-input-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
        buttonText="Cохранить"
      >
        <>
          <input type="url" name="link" className="popup__input popup__input_type_avatar" id="href1-input"
            required placeholder="Ссылка на картинку" />
          <span className="popup__input-error href1-input-error"></span>
        </>
      </PopupWithForm>

      <div className="popup popup_type_agreement">
        <button type="button" className="popup__close-button popup__close-button_agreement"></button>
        <div className="popup__container">
          <h2 className="popup__title popup__title_agreement">Вы уверены?</h2>
          <button type="submit" className="popup__submit-button popup__submit-button_type_agreement">Да</button>
        </div>
      </div>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
