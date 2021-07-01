import styled from 'styled-components';

const StyledAboutSection = styled.section`
  display: grid;
  grid-template: 1fr;
  margin-top: 30px;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 100px;
  }

  &:before,
  &:after {
    display: none;
  }

  .about-section {
    &__content {
      margin-bottom: 80px;
    }

    &__paragraph {
      line-height: 1.6;
    }
  }
`;

export default StyledAboutSection;
