import React, { useEffect, useState, useRef } from 'react';
import propTypes from 'prop-types';
import StyledSelect from './Select.styled';
import ArrowIcon from '../../../assets/svg/arrow-2.svg';

const Select = ({ options, handleSelect, label, className }) => {
  const [value, setValue] = useState('wszystko');
  const [isCollapsed, setCollapsed] = useState(false);
  const dropdown$ = useRef(null);

  useEffect(() => {
    setCollapsed(false);
  }, [value]);

  const clickListener = e => {
    if (!dropdown$.current || !dropdown$.current.contains(e.target))
      setCollapsed(false);
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
      <div
        role="button"
        tabIndex="0"
        className="dropdown__current"
        onClick={() => setCollapsed(!isCollapsed)}
        onKeyDown={({ key }) => {
          if (key === 13) setCollapsed(!isCollapsed);
        }}
      >
        {value}
        <ArrowIcon className="dropdown__icon" role="presentation" />
      </div>
      <div className="dropdown__list" isCollapsed={isCollapsed}>
        <button
          type="button"
          className="dropdown__option"
          onKeyDown={({ key }) => {
            if (key === 13) {
              setCollapsed(false);
              setValue('wszystko');
            }
            handleSelect('');
          }}
          onClick={() => {
            setValue('wszystko');
            handleSelect('');
          }}
        >
          wszystko
        </button>
        {options.map(option => (
          <button
            type="button"
            className="dropdown__option"
            key={option}
            onKeyDown={({ key }) => {
              if (key === 13) {
                setCollapsed(false);
                setValue(option);
              }
              handleSelect(option);
            }}
            onClick={() => {
              setValue(option);
              handleSelect(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
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
