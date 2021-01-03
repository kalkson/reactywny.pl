import React from 'react';
import propTypes from 'prop-types';
import StyledPostWrapperOptions from './StyledPostWrapperOptions';

const PostWrapperOptions = ({ handleSwitch, handleChange }) => {
  return (
    <StyledPostWrapperOptions>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          type="text"
          placeholder="wyszukaj wpis"
          className="searchInput"
          onChange={e => handleChange(e)}
        />
        <label htmlFor="category">
          Kategoria{' '}
          <select className="category" id="category" placeholder="kategoria">
            {/* <option value="react" /> */}
          </select>
        </label>
      </div>
      <br />
      <label className="switch" htmlFor="switch">
        <input type="checkbox" id="switch" onClick={() => handleSwitch()} />
        <span className="slider round" />
      </label>
    </StyledPostWrapperOptions>
  );
};

PostWrapperOptions.propTypes = {
  handleSwitch: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default PostWrapperOptions;
