import React from 'react';
import styled from 'styled-components';
import MailIcon from '../../assets/svg/mail.svg';

const StyledNewsletterButton = styled.button`
  position: fixed;
  background-color: black;
  width: 50px;
  height: 50px;
  bottom: 100px;
  right: 0;
  z-index: 100;

  padding: 15px;
  box-shadow: 0px 0px 43px 1px rgba(255, 255, 255, 0.75);

  & svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${({ theme }) => theme.colors.mainFair};
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 75px;
    height: 75px;
    padding: 22px;
  }
`;

const NewsletterButton = () => {
  return (
    <StyledNewsletterButton title="Zapisz się do newslettera">
      <MailIcon />
    </StyledNewsletterButton>
  );
};

export default NewsletterButton;
