import React from 'react';
import propTypes from 'prop-types';
import StyledFaqItem from './FaqItem.styled';

const FaqItem = ({ data }) => {
  const { headline, content } = data;

  return (
    <StyledFaqItem>
      <span>{headline}</span>
      <p>{content}</p>
    </StyledFaqItem>
  );
};

FaqItem.propTypes = {
  data: propTypes.shape({
    headline: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
  }).isRequired,
};

export default FaqItem;
