import React, { useRef } from 'react';
import StyledContact from './Contact.styled';
import PageInput from '../PageInput/PageInput';

const Contact = () => {
  const form = useRef(null);

  return (
    <StyledContact className="contact" id="contact">
      <h2>Kontakt</h2>
      <p className="contact__paragraph">
        Jeżeli nie znalazłeś odpowiedzi na swoje pytanie w FAQ, a mimo wszystko
        chcesz się o coś zapytać. to możesz do mnie napisać tutaj. Ewentualnie
        poprzez skrzynkę pocztową na adres reactywny@kontakt.pl
      </p>
      <form
        action="/thanks/"
        name="contact"
        className="contact__form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" style={{ display: 'none' }}>
          <input name="bot-field" />
        </p>
        <input
          placeholder="Adres e-mail"
          className="contact__form__input"
          name="email"
          type="email"
        />
        <textarea className="contact__form__textarea" name="message" />
        <button type="submit" className="contact__form__button">
          Ślij
        </button>
      </form>
    </StyledContact>
  );
};

export default Contact;
