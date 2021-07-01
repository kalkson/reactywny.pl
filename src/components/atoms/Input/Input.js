import React from 'react';
import propTypes from 'prop-types';
import StyledInput from './Input.styled';

const Input = ({ Icon, className, label, type, ...props }) => (
  <StyledInput className={`input ${className}`}>
    <input
      type={type}
      className="input__element"
      {...props}
      aria-label={label}
    />
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
  type: propTypes.string,
};

Input.defaultProps = {
  Icon: null,
  className: '',
  label: null,
  type: 'text',
};

export default Input;
