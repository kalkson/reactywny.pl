import React, { useEffect, useState, useRef } from 'react';
import propTypes from 'prop-types';
import StyledSelect from './Select.styled';
import ArrowIcon from '../../../assets/svg/arrow-2.svg';

const Select = ({ options, handleSelect, label, className }) => {
  const [value, setValue] = useState('wszystko');
  const [isCollapsed, setCollapsed] = useState(false);
  const dropdown$ = useRef(null);

  const clickListener = e => {
    if (!dropdown$.current || !dropdown$.current.contains(e.target))
      setCollapsed(false);
  };

  const handleClick = (option = 'wszystko') => {
    setValue(option);
    console.log(option);
    if (option === 'wszystko') handleSelect('');
    else handleSelect(option);
    setCollapsed(false);
  };

  const handleKeyPress = ({ key }, option = 'wszystko') => {
    if (key === 13) {
      setCollapsed(false);
      setValue(option);
    }
    handleSelect('');
  };

  useEffect(() => {
    document.addEventListener('click', clickListener);

    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, []);

  return (
    <StyledSelect
      className={`dropdown ${className}`}
      isCollapsed={isCollapsed}
      ref={dropdown$}
      label={label}
    >
      <div className="dropdown__label" id={`${label}-label`}>
        {label}
      </div>
      <button
        type="button"
        tabIndex="0"
        className="dropdown__current"
        onClick={() => setCollapsed(!isCollapsed)}
        onKeyDown={({ key }) => {
          if (key === 13) setCollapsed(!isCollapsed);
        }}
      >
        {value}
        <ArrowIcon className="dropdown__icon" role="presentation" />
      </button>
      <ul className="dropdown__list" isCollapsed={isCollapsed} role="listbox">
        <li className="dropdown__option" aria-labelledby={`${label}-dropdown`}>
          <button
            type="button"
            onKeyDown={e => handleKeyPress(e)}
            onClick={() => handleClick()}
            className="dropdown__option-button"
          >
            wszystko
          </button>
        </li>
        {options.map(option => (
          <li
            className="dropdown__option"
            key={option}
            aria-labelledby={`${label}-dropdown`}
          >
            <button
              type="button"
              onKeyDown={e => handleKeyPress(e, option)}
              onClick={() => handleClick(option)}
              className="dropdown__option-button"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </StyledSelect>
  );
};

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  handleSelect: propTypes.func.isRequired,
  label: propTypes.string,
  className: propTypes.string,
};

Select.defaultProps = {
  label: '',
  className: '',
};

export default Select;
