import React from 'react';
import propTypes from 'prop-types';
import StyledInput from './Input.styled';

const Input = ({ Icon, className, label, ...props }) => (
  <StyledInput className={`input ${className}`}>
    <input className="input__element" {...props} aria-label={label} />
    {Icon && (
      <div className="input__box">
        <Icon className="input__icon" role="presentation" />
      </div>
    )}
  </StyledInput>
);

Input.propTypes = {
  Icon: propTypes.node,
  className: propTypes.string,
  label: propTypes.string,
};

Input.defaultProps = {
  Icon: null,
  className: '',
  label: null,
};

export default Input;
