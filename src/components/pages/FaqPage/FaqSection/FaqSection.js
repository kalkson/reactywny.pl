import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import FaqItem from 'components/atoms/FaqItem/FaqItem';
import StyledFaqSection from './FaqSection.styled';

export const query = graphql`
  {
    datoCmsFaq {
      faqData
      id
    }
  }
`;

const StyledFaqItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 50px;

  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    grid-gap: 20px;
    margin: 150px auto 0;
    grid-template-columns: repeat(3, 1fr);
    color: ${({ theme }) => theme.colors.mainFair};
    width: 100%;
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: 1280px;
  }

  /* @media ${({ theme }) => theme.media.laptop} {
    grid-gap: 20px;
    margin-top: 150px;
    grid-template-columns: repeat(3, 1fr);
    color: ${({ theme }) => theme.colors.mainFair};
  } */
`;

const FaqSection = () => {
  const data = useStaticQuery(query);

  const items = JSON.parse(data.datoCmsFaq.faqData).data;

  return (
    <StyledFaqSection className="faq">
      <h1>FAQ</h1>
      <StyledFaqItemsWrapper>
        {items.map(item => (
          <FaqItem data={item} key={item.headline} />
        ))}
      </StyledFaqItemsWrapper>
    </StyledFaqSection>
  );
};

export default FaqSection;
