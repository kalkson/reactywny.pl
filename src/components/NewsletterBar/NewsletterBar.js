import React from 'react';
import propTypes from 'prop-types';
import StyledNewsletterBar from './NewsletterBar.styled';
import PageLink from '../PageLink/PageLink';
import PageInput from '../PageInput/PageInput';

const NewsletterBar = ({ isNewsletterVisible }) => {
  return (
    <StyledNewsletterBar
      className="newsletter"
      isNewsletterVisible={isNewsletterVisible}
    >
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

NewsletterBar.propTypes = {
  isNewsletterVisible: propTypes.bool,
};

NewsletterBar.defaultProps = {
  isNewsletterVisible: null,
};

export default NewsletterBar;
