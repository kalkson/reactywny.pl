import propTypes from 'prop-types';
import React from 'react';

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
  Icon: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
    propTypes.func,
  ]).isRequired,
  className: propTypes.string,
  label: propTypes.string,
  type: propTypes.string,
};

Input.defaultProps = {
  className: '',
  label: null,
  type: 'text',
};

export default Input;
