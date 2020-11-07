import React from 'react';
import StyledNewsletterBar from './NewsletterBar.styled';
import PageLink from '../PageLink/PageLink';
import PageInput from '../PageInput/PageInput';

const NewsletterBar = () => {
  return (
    <StyledNewsletterBar className="newsletter">
      <span className="newsletter__head">NEWSLETTER</span>
      <p className="newsletter__paragraph">
        Zapisz się do newslettera, by być na bieżąco z nowymi wpisami i
        aktualnościami
      </p>
      <form action="" className="newsletter__form">
        <PageInput
          className="newsletter__form__input"
          type="email"
          placeholder="Adres e-mail"
        />
        <button type="submit" className="newsletter__form__button">
          <PageLink>Ślij</PageLink>
        </button>
      </form>
    </StyledNewsletterBar>
  );
};

export default NewsletterBar;
