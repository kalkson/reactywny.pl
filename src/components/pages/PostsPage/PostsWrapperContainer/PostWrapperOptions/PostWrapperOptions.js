import React from 'react';
import propTypes from 'prop-types';
import StyledPostWrapperOptions from './StyledPostWrapperOptions';

const PostWrapperOptions = ({
  handleSwitch,
  handleChange,
  handleSelect,
  categories,
}) => {
  console.log(categories);

  return (
    <StyledPostWrapperOptions>
      <div className="inputsContainer">
        <input
          type="text"
          placeholder="wyszukaj wpis"
          className="searchInput"
          onChange={e => handleChange(e)}
        />
        <label htmlFor="category" className="categoryLabel">
          <select
            className="category"
            id="category"
            placeholder="kategoria"
            onChange={e => handleSelect(e)}
          >
            <option value="" aria-label="empty">
              wszystko
            </option>
            {categories.map(category => (
              <option key="category" value={category} aria-label={category}>
                {category}
              </option>
            ))}
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
  handleSelect: propTypes.func.isRequired,
  categories: propTypes.shape(propTypes.string).isRequired,
};

export default PostWrapperOptions;
