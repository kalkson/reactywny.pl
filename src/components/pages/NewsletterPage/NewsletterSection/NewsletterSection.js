import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import gsap from 'gsap';

import Headline from 'components/atoms/Headline/Headline';
import Box from 'components/atoms/Box/Box';
import Input from 'components/atoms/Input/Input';
import MailIcon from 'assets/svg/mail.svg';
import Button from 'components/atoms/Button/Button';
import NewsletterBenefit from 'components/molecules/NewsletterBenefit/NewsletterBenefit';

import MailingIllustration from 'assets/svg/mailing.svg';
import MegaphoneIllustration from 'assets/svg/newsletter/megaphone.svg';
import EmailIllustration from 'assets/svg/newsletter/email.svg';
import BloggingIllustration from 'assets/svg/newsletter/blogging.svg';
import CheckIllustration from 'assets/svg/newsletter/check.svg';

import StyledNewsletterSection from './NewsletterSection.styled';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const response = await addToMailchimp(email).catch(err => {
        throw err.message;
      });
      console.log(response);

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
      console.log(error);
    }
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <StyledNewsletterSection className="container newsletter">
      <Headline aria-flowto="newsletter__headline">Newsletter</Headline>

      <Box className="newsletter__box">
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <p className="newsletter__paragraph">
            Dołącz do odbiorców mojego newslettera, gdzie w przyszłości będę się
            dzielił cenną wiedzą o webdevelopmencie i frontendzie.
          </p>
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

      <div className="benefits">
        <h2 className="benefits__headline">Korzyści z mojego newslettera</h2>
        <div className="benefits__container" role="listbox">
          <NewsletterBenefit
            className="benefits__item"
            role="listitem"
            name="Cotygodniowe maile"
            description="(w przygotowaniach) Cotygodniowa dawka wiedzy o frontendzie! Blog to nie jedyne źródło, w którym dzielę
          sie wiedzą. Jest ich przynajmniej kilka - newsletter jest jednym z nich. Raz w tygodniu na twoją
          skrzynkę pocztową."
            Image={EmailIllustration}
          />
          <NewsletterBenefit
            className="benefits__item"
            role="listitem"
            name="Informacje o postach na blogu"
            description="Za każdym razem, gdy wrzucam nowy post na blogu, ty dowiadujesz się o nim jako jeden z pierwszych. Proste? Proste."
            Image={BloggingIllustration}
          />
          <NewsletterBenefit
            className="benefits__item"
            role="listitem"
            name="Inne aktywności i nowości"
            description="Czyli wszystko to, co nie wpisuje się w pozostałe mailingi. Dowiesz się o ważnych wydarzeniach w mojej karierze frontendowca, którę mogą ci się przydać do własnego rozwoju - przykładowo kiedy biorę udział w jakimś meetupie."
            Image={MegaphoneIllustration}
          />
        </div>
      </div>
      <div className="benefits__note" role="note">
        Duża dawka wiedzy. Zero spamu. Jeśli jednak uznasz inaczej, możesz w
        każdej chwili wypisać się z newslettera lub sam zdecydować, jakiego typu
        maile chcesz ode mnie otrzymywać.
      </div>
    </StyledNewsletterSection>
  );
};

export default NewsletterSection;
