import React, { useState } from 'react';
import propTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import StyledNewsletterBar from './NewsletterBar.styled';
import PageInput from '../../atoms/PageInput/PageInput';
import PageButton from '../../atoms/PageButton/PageButton.styled';

const NewsletterBar = ({ isNewsletterVisible }) => {
  const [email, setEmail] = useState('');
  const [sentResult, setResult] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    setResult(result);
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handlePrevent = e => {
    e.preventDefault();
  };

  return (
    <StyledNewsletterBar
      className="newsletter"
      isNewsletterVisible={isNewsletterVisible}
    >
      <span className="newsletter__success">
        {sentResult && sentResult.result === 'success' && 'Zapisano, dzięki!'}
      </span>
      <span className="newsletter__error">
        {sentResult &&
          sentResult.result === 'error' &&
          sentResult.msg.includes('subscribed') &&
          'Jesteś już zapisany!'}
        {sentResult &&
          sentResult.result === 'error' &&
          (sentResult.msg.includes('is not valid') ||
            sentResult.msg.includes('cannot be')) &&
          'Niepoprawny e-mail'}
        {sentResult &&
          sentResult.result === 'error' &&
          sentResult.msg.includes('too many') &&
          'Za dużo żądań'}
      </span>
      <span className="newsletter__head">NEWSLETTER</span>
      <p className="newsletter__paragraph">
        Zapisz się do newslettera, by być na bieżąco z nowymi wpisami i
        aktualnościami
      </p>
      <form
        className="newsletter__form"
        onSubmit={
          sentResult && sentResult.result === 'success'
            ? e => handlePrevent(e)
            : e => handleSubmit(e)
        }
      >
        <PageInput
          className="newsletter__form__input"
          placeholder="Adres e-mail"
          type="email"
          name="email"
          onChange={e => handleChange(e)}
          disabled={sentResult && sentResult.result === 'success'}
        />
        <PageButton type="submit" className="newsletter__form__button">
          Wyślij
        </PageButton>
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
