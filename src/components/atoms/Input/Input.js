import React from 'react';
import propTypes from 'prop-types';
import StyledInput from './Input.styled';

const Input = ({ Icon, className, ...props }) => (
  <StyledInput className={`input ${className}`}>
    <input className="input__element" {...props} />
    {Icon && (
      <div className="input__box">
        <Icon className="input__icon" />
      </div>
    )}
  </StyledInput>
);

Input.propTypes = {
  Icon: propTypes.node,
  className: propTypes.string,
};

Input.defaultProps = {
  Icon: null,
  className: '',
};

export default Input;
