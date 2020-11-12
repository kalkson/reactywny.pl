import React from 'react';
import StyledContact from './Contact.styled';
import PageInput from '../PageInput/PageInput';
import PageLink from '../PageLink/PageLink';

const Contact = () => {
  return (
    <StyledContact className="contact" id="contact">
      <h2>Kontakt</h2>
      <p className="contact__paragraph">
        Jeżeli nie znalazłeś odpowiedzi na swoje pytanie w FAQ, a mimo wszystko
        chcesz się o coś zapytać. to możesz do mnie napisać tutaj. Ewentualnie
        poprzez skrzynkę pocztową na adres reactywny@kontakt.pl
      </p>
      <form action="" className="contact__form">
        <PageInput
          placeholder="Adres e-mail"
          className="contact__form__input"
        />
        <textarea className="contact__form__textarea" />
        <button type="submit" className="contact__form__button">
          <PageLink>Ślij</PageLink>
        </button>
      </form>
    </StyledContact>
  );
};

export default Contact;
