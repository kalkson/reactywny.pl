import React from 'react';
import propTypes from 'prop-types';

import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Input/Select';
import SearchIcon from 'assets/svg/other/search.svg';

import StyledPostWrapperOptions from './StyledPostWrapperOptions';

const PostWrapperOptions = ({ handleChange, handleSelect, categories }) => {
  return (
    <StyledPostWrapperOptions className="options">
      <Input
        type="text"
        placeholder="wyszukaj wpis"
        onChange={e => handleChange(e)}
        Icon={SearchIcon}
        className="options__input"
      />
      <Select
        options={categories}
        handleSelect={handleSelect}
        label="kategoria"
        className="options__select"
      />
    </StyledPostWrapperOptions>
  );
};

PostWrapperOptions.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSelect: propTypes.func.isRequired,
  categories: propTypes.arrayOf(propTypes.string).isRequired,
};

export default PostWrapperOptions;
