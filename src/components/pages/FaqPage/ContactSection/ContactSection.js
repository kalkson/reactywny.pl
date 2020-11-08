import React from 'react';
import NewsletterBar from '../../../NewsletterBar/NewsletterBar';
import Contact from '../../../Contact/Contact';
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
