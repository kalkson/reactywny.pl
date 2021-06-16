import React from 'react';
import Headline from 'components/atoms/Headline/Headline';
import Box from 'components/atoms/Box/Box';
import Input from 'components/atoms/Input/Input';
import MailIcon from 'assets/svg/mail.svg';
import Button from 'components/atoms/Button/Button';
import StyledNewsletterSection from './NewsletterSection.styled';

const NewsletterSection = () => (
  <StyledNewsletterSection className="container newsletter">
    <Headline aria-flowto="newsletter-paragraph">Newsletter</Headline>

    <Box>
      <div className="row">
        <div className="col-md-4">
          <form>
            <Input placeholder="e-mail" Icon={MailIcon} />
            <Button aria-label="dołącz do newslettera" type="submit">
              Dołącz
            </Button>
          </form>
        </div>
        <div className="col-md-7 col-md-offset-1" id="newsletter-paragraph">
          <p>
            Dołącz do odbiorców mojego newslettera, gdzie w przyszłości będę się
            dzielił cenną wiedzą o frameworkach, webdevelopmencie i frontendzie.
          </p>
        </div>
      </div>
    </Box>
  </StyledNewsletterSection>
);

export default NewsletterSection;
