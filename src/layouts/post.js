import React from 'react';
import styled from 'styled-components';
import { Disqus } from 'gatsby-plugin-disqus';
// import PageFooter from '../components/PageFooter/PageFooter';
// import PageHeader from '../components/PageHeader/PageHeader';

const StyledPostLayout = styled.article`
  padding: 200px 17px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainFair};
  font-weight: ${({ theme }) => theme.fonts.Bold};
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  .post {
    &__top {
      font-size: 1.2rem;

      &__date {
        text-transform: uppercase;
        margin-right: 7px;
      }

      &__category {
        color: ${({ theme }) => theme.colors.mainBlue};
      }
    }

    &__featuredImage {
      width: 100vw;
      transform: translateX(-17px);
    }

    &__image {
      width: 100%;
    }

    &__title {
      font-size: 3rem;
      font-weight: ${({ theme }) => theme.fonts.semiBold};
    }

    &__description {
      font-size: 2.2rem;
    }

    &__paragraph {
      font-size: 1.2rem;
    }

    &__disquis {
      margin-top: 100px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 400px 232px 150px 80px;

    & > *:not(:last-child) {
      margin-bottom: 50px;
    }

    .post {
      &__top {
        font-size: 2.5rem;
      }

      &__featuredImage {
        width: 100%;
        transform: translateX(0);
      }

      &__image {
        width: 80%;
      }

      &__title {
        font-size: 5.6rem;
      }

      &__description {
        font-size: 3.6rem;
      }

      &__paragraph {
        font-size: 2rem;
      }
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 400px 546px 150px 208px;

    .post {
      &__image {
        width: 80%;
      }

      &__featuredImage {
        width: 100vw;
        transform: translateX(-208px);
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 400px 792px 150px 416px;

    .post {
      &__image {
        width: 80%;
      }

      &__featuredImage {
        transform: translateX(-416px);
      }
    }
  }
`;

const PostLayout = () => {
  const disqusConfig = {
    // url: `/post`,
    // identifier: 1,
    // title: 'post',
  };

  return (
    <>
      {/* <PageHeader /> */}
      <StyledPostLayout>
        <div className="post__top">
          <date className="post__top__date">12 grudnia 20</date>
          <span className="post__top__category">GitHub</span>
        </div>
        <span className="post__title">Czym jest GitHub?</span>
        <img
          src="https://source.unsplash.com/random/1920x400"
          alt="post"
          className="post__featuredImage"
        />
        <span className="post__description">
          Praca z gitem może na początku powodować frustrację. W moim przypadku
          tak było. Co zrobiłem, by czuć się w nim jak ryba w wodzie?
        </span>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam
        </p>
        <img
          src="https://source.unsplash.com/random/400x200"
          alt="postImage"
          className="post__image"
        />
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam
        </p>

        <Disqus config={disqusConfig} className="post__disquis" />
      </StyledPostLayout>
      {/* <PageFooter /> */}
    </>
  );
};

export default PostLayout;
