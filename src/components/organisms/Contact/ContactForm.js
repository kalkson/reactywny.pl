import React, { useState } from 'react';
import StyledContactForm from './ContactForm.styled';
import PageInput from '../../atoms/PageInput/PageInput';
import PageButton from '../../atoms/PageButton/PageButton.styled';

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = () => {
  const [data, setData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then(() => setStatus('success'))
      .catch(error => console.log(error));

    e.preventDefault();
  };

  return (
    <StyledContactForm className="contact" id="contact">
      <h2>Kontakt</h2>
      <p className="contact__paragraph">
        Jeżeli nie znalazłeś odpowiedzi na swoje pytanie w FAQ, a mimo wszystko
        chcesz się o coś zapytać. to możesz do mnie napisać tutaj. Ewentualnie
        poprzez skrzynkę pocztową na adres kontakt@reactywny.pl
      </p>
      <form
        action="/thanks/"
        name="contact"
        className="contact__form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={e => handleSubmit(e)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" style={{ display: 'none' }}>
          <input name="bot-field" />
        </p>
        <PageInput
          placeholder="Adres e-mail"
          className="contact__form__input"
          name="email"
          type="email"
          onChange={e => handleChange(e)}
          disabled={status === 'success'}
          required
        />
        <textarea
          className="contact__form__textarea"
          name="message"
          onChange={e => handleChange(e)}
          disabled={status === 'success'}
          required
        />
        {status === 'success' ? (
          <span className="contact__form__success">Poszło!</span>
        ) : (
          <PageButton type="submit" className="contact__form__button">
            Wyślij
          </PageButton>
        )}
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
