import React from 'react';
import propTypes from 'prop-types';
import StyledPostWrapperOptions from './StyledPostWrapperOptions';
import Input from '../../../../atoms/Input/Input';
import Select from '../../../../atoms/Input/Select';
import SearchIcon from '../../../../../assets/svg/search.svg';

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
