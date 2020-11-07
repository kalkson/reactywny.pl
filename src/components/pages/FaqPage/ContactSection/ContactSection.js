import React from 'react';
import NewsletterBar from '../../../NewsletterBar/NewsletterBar';
import StyledContactSecton from './ContactSection.styled';

const ContactSection = () => {
  return (
    <StyledContactSecton className="contact">
      <NewsletterBar />
    </StyledContactSecton>
  );
};

export default ContactSection;
