import BloggingIllustration from 'assets/svg/newsletter/blogging.svg';
import EmailIllustration from 'assets/svg/newsletter/email.svg';
import MegaphoneIllustration from 'assets/svg/newsletter/megaphone.svg';
import Headline from 'components/atoms/Headline/Headline';
import NewsletterBenefit from 'components/molecules/NewsletterBenefit/NewsletterBenefit';
import NewsletterBar from 'components/organisms/NewsletterBar/NewsletterBar';
import React from 'react';

import StyledNewsletterSection from './NewsletterSection.styled';

const NewsletterSection = () => {
  return (
    <StyledNewsletterSection className="container">
      <Headline aria-flowto="newsletter__headline">Newsletter</Headline>
      <NewsletterBar />

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
