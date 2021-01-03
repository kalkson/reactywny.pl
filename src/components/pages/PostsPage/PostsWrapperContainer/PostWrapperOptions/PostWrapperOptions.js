import React from 'react';
import propTypes from 'prop-types';
import StyledPostWrapperOptions from './StyledPostWrapperOptions';

const PostWrapperOptions = ({ handleSwitch }) => {
  return (
    <StyledPostWrapperOptions>
      <input type="text" placeholder="wyszukaj wpis" className="searchInput" />
      <label className="switch" htmlFor="switch">
        Ukryj obrazy
        <input type="checkbox" id="switch" onClick={() => handleSwitch()} />
        <span className="slider round" />
      </label>
    </StyledPostWrapperOptions>
  );
};

PostWrapperOptions.propTypes = {
  handleSwitch: propTypes.func.isRequired,
};

export default PostWrapperOptions;
