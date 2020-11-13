import React, { forwardRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import MailIcon from '../../assets/svg/mail.svg';

const StyledNewsletterButton = styled.button`
  position: fixed;
  background-color: black;
  width: 50px;
  height: 50px;
  bottom: 110px;
  right: 0;
  z-index: 100;

  transition: transform 300ms ease-in;

  transform: translateX(
    ${({ isClosedOneTime, isButtonVisible }) =>
      isClosedOneTime && isButtonVisible ? '50%' : '100%'}
  );

  padding: 15px;
  box-shadow: 0px 0px 43px 1px rgba(0, 0, 0, 0.75);

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

const NewsletterButton = (
  {
    isButtonVisible,
    setNewsletterVisible,
    isNewsletterVisible,
    isClosedOneTime,
  },
  ref
) => {
  return (
    <StyledNewsletterButton
      ref={ref}
      title="Zapisz się do newslettera"
      isButtonVisible={isButtonVisible}
      isClosedOneTime={isClosedOneTime}
      onClick={() => setNewsletterVisible(!isNewsletterVisible)}
    >
      <MailIcon />
    </StyledNewsletterButton>
  );
};

NewsletterButton.propTypes = {
  isButtonVisible: propTypes.bool.isRequired,
  isNewsletterVisible: propTypes.bool.isRequired,
  isClosedOneTime: propTypes.bool.isRequired,
  setNewsletterVisible: propTypes.func.isRequired,
};

export default forwardRef(NewsletterButton);
