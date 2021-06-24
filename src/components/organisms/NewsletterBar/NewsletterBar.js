import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import gsap from 'gsap';

import Box from 'components/atoms/Box/Box';
import Input from 'components/atoms/Input/Input';
import MailIcon from 'assets/svg/mail.svg';
import Button from 'components/atoms/Button/Button';

import MailingIllustration from 'assets/svg/mailing.svg';
import CheckIllustration from 'assets/svg/newsletter/check.svg';

import StyledNewsletterBar from './NewsletterBar.styled';

const NewsletterBar = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const response = await addToMailchimp(email).catch(err => {
        throw err.message;
      });

      if (response.result === 'success') {
        const arrowToAnimate$ = document.querySelector('#arrow-to-animate');
        const tl = gsap.timeline();
        tl.to(arrowToAnimate$, { x: 40, y: 60, duration: 0.4 });
        tl.to(arrowToAnimate$, {
          x: 600,
          y: -320,
          duration: 0.4,
          onComplete: () => {
            setError(response);
          },
        });
      } else throw response.msg;
    } catch (err) {
      setError({ result: 'error', message: err });
    }
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <StyledNewsletterBar className="newsletter">
      <Box className="newsletter__box">
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__text-group">
            <h2 className="newsletter__headline">Dołącz do mailingu</h2>
            <p className="newsletter__paragraph">
              Dołącz do odbiorców mojego newslettera, gdzie w przyszłości będę
              się dzielił cenną wiedzą o webdevelopmencie i frontendzie.
            </p>
          </div>
          {!error || error?.result === 'error' ? (
            <>
              <Input
                placeholder="e-mail"
                type="e-mail"
                Icon={MailIcon}
                className="newsletter__input"
                onChange={e => handleChange(e)}
              />
              <Button
                aria-label="dołącz do newslettera"
                type="submit"
                className="newsletter__button"
              >
                Dołącz
              </Button>
              {error && error?.result === 'error' ? (
                <div className="newsletter__error" role="alert">
                  {error.message.includes('is already subscribed')
                    ? 'Jesteś już zapisany'
                    : null}
                  {error.message.includes('Too many')
                    ? 'Wystąpił błąd, spróbuj ponownie później'
                    : null}
                  {error.message.includes('is not valid')
                    ? 'Niepoprawny adres e-mail'
                    : null}
                  {error.message.includes('Timed out') ? 'Wystąpił błąd' : null}
                </div>
              ) : null}
            </>
          ) : (
            <>
              <CheckIllustration />
              <div role="alert" className="newsletter__success">
                Poszło!
              </div>
            </>
          )}
        </form>
        <div className="newsletter__illustration-container">
          <MailingIllustration
            className="newsletter__illustration"
            role="presentation"
          />
        </div>
      </Box>
    </StyledNewsletterBar>
  );
};

export default NewsletterBar;
