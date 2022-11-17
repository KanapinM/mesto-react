export { cardsContainer, buttonEditProfile, buttonAddCard, buttonSubmitProfile, buttonSubmitCard, buttonSubmitAvatar, avatar, profileForm, placeForm, avatarForm, profileName, profileAbout, inputName, inputAbout, selectors, popupSelectorsImage, popupSelectorsAddCard, popupUserInfoSelectors, popupAgreementSelectors, popupAvatarSelectors, validationConfig };


const cardsContainer = document.querySelector('.cardsContainer');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonSubmitProfile = document.querySelector('.popup__submit-button_type_profile');
const buttonSubmitCard = document.querySelector('.popup__submit-button_type_place');
const buttonSubmitAvatar = document.querySelector('.popup__submit-button_type_avatar');

const profileForm = document.querySelector('.popup__form_type_profile');
const placeForm = document.querySelector('.popup__form_type_place');
const avatarForm = document.querySelector('.popup__form_type_avatar');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');

const avatar = document.querySelector('.profile__avatar');

const selectors = document.querySelector('.card-template');

const popupSelectorsImage = {
    popup: 'popup_type_image',
    popupOpenedClass: 'popup_open'
}
const popupSelectorsAddCard = {
    popup: 'popup_type_add-place',
    popupOpenedClass: 'popup_open',
    popupForm: '.popup__form_type_place'
}
const popupUserInfoSelectors = {
    popup: 'popup_type_edit-profile',
    popupOpenedClass: 'popup_open',
    popupForm: '.popup__form_type_profile'
}
const popupAvatarSelectors = {
    popup: 'popup_type_change-avatar',
    popupOpenedClass: 'popup_open',
    popupForm: '.popup__form_type_avatar'
}
const popupAgreementSelectors = {
    popup: 'popup_type_agreement',
    popupOpenedClass: 'popup_open'
}
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    error: '.popup__input-error'
};

