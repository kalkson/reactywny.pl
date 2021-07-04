import React from 'react';
import propTypes from 'prop-types';
import StyledNewsletterBenefit from './NewsletterBenefit.styled';

const NewsletterBenefit = ({
  Image,
  name,
  description,
  className,
  ...props
}) => (
  <StyledNewsletterBenefit {...props} className={`benefit${` ${className}`}`}>
    <Image className="benefit__illustration" role="presentation" />
    <h3 className="benefit__headline">{name}</h3>
    <p className="benefit__description">{description}</p>
  </StyledNewsletterBenefit>
);

NewsletterBenefit.propTypes = {
  Image: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
    propTypes.func,
  ]).isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  className: propTypes.string,
};

NewsletterBenefit.defaultProps = {
  className: '',
};

export default NewsletterBenefit;
