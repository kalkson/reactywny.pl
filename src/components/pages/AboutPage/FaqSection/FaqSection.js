import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Box from '../../../atoms/Box/Box';
import StyledFaqSection from './FaqSection.styled';

export const query = graphql`
  {
    datoCmsFaq {
      faqData
      id
    }
  }
`;

const FaqSection = () => {
  const data = useStaticQuery(query);

  const items = JSON.parse(data.datoCmsFaq.faqData).data;
  return (
    <StyledFaqSection className="container faq-section">
      <Box className="faq-section__wrapper">
        {items.map(item => (
          <div key={item.headline} className="faq-section__item">
            <h3 className="faq-section__headline">{item.headline}</h3>
            <p className="faq-section__description">{item.content}</p>
          </div>
        ))}
      </Box>
    </StyledFaqSection>
  );
};

export default FaqSection;
