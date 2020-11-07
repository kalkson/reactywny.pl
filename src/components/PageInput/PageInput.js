import React from 'react';
import propTypes from 'prop-types';
import StyledPageInput from './PageInput.styled';

const PageInput = ({ placeholder, className }) => {
  return <StyledPageInput placeholder={placeholder} className={className} />;
};

PageInput.propTypes = {
  placeholder: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};

export default PageInput;
