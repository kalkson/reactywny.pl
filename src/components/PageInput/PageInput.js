import React from 'react';
// import propTypes from 'prop-types';
import StyledPageInput from './PageInput.styled';

const PageInput = props => {
  return (
    <StyledPageInput
      {...props}
      // type={type}
      // name={name}
      // placeholder={placeholder}
      // className={className}
      // onChange={onChange}
      // {...props}
    />
  );
};

// PageInput.propTypes = {
//   placeholder: propTypes.string,
//   className: propTypes.string,
//   type: propTypes.string,
//   name: propTypes.string,
//   onChange: propTypes.func,
// };

// PageInput.defaultProps = {
//   placeholder: null,
//   className: null,
//   type: null,
//   name: null,
//   onChange: null,
// };

export default PageInput;
