import React from 'react';
import NewsletterBar from '../../../molecules/NewsletterBar/NewsletterBar';
import Contact from '../../../organisms/Contact/ContactForm';
import StyledContactSecton from './ContactSection.styled';

const ContactSection = () => {
  return (
    <StyledContactSecton className="contact">
      <NewsletterBar />
      <Contact />
    </StyledContactSecton>
  );
};

export default ContactSection;
