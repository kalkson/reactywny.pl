import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import propTypes from 'prop-types';
import { Disqus } from 'gatsby-plugin-disqus';
import { graphql } from 'gatsby';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialDark,
  solarizedlight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

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

    &__syntax {
      font-size: 1.2rem;
      font-weight: initial;
      font-weight: 600;
      width: 85%;
    }

    &__cli {
      font-size: 1.2rem;
      font-weight: initial;
      font-weight: 600;
      width: 85%;
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

      &__syntax {
        font-size: 1.6rem;
        width: 100%;
        font-weight: 600;
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

export const query = graphql`
  query querySingleDatoCMSPost($id: String!) {
    datoCmsPost(id: { eq: $id }) {
      id
      date
      description
      title
      featuredImage {
        fluid(maxWidth: 1920, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      category
      postContent {
        ... on DatoCmsParagraph {
          id
          paragraphContent
        }
        ... on DatoCmsPostImage {
          id
          imageData {
            fluid(imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsPostHeadline {
          id
          headingContent
        }
        ... on DatoCmsPostSyntax {
          id
          syntaxContent
          language
        }
        ... on DatoCmsPostCli {
          id
          cliContent
        }
      }
    }
  }
`;

const PostLayout = ({ data }) => {
  const disqusConfig = {
    // url: `/post`,
    // identifier: 1,
    // title: 'post',
  };

  return (
    <StyledPostLayout>
      <div className="post__top">
        <date className="post__top__date">{data.datoCmsPost.date}</date>
        <span className="post__top__category">{data.datoCmsPost.category}</span>
      </div>
      <span className="post__title">{data.datoCmsPost.title}</span>
      {/* <img
        src={data.datoCmsPost.featuredImage.url}
        alt="post"
        className="post__featuredImage"
      /> */}
      <Image
        fluid={data.datoCmsPost.featuredImage.fluid}
        className="post__featuredImage"
      />

      <span className="post__description">{data.datoCmsPost.description}</span>
      {data.datoCmsPost.postContent.map(item => {
        const itemKey = Object.keys(item)[2];

        console.log(item);

        switch (itemKey) {
          case 'paragraphContent':
            return <p className="post__paragraph">{item.paragraphContent}</p>;
          case 'imageData':
            return <Image fluid={item.imageData.fluid} />;
          case 'headingContent':
            return <h2 className="post__paragraph">{item.headingContent}</h2>;
          case 'syntaxContent':
            console.log(item);
            return (
              <SyntaxHighlighter
                language={item.language}
                style={materialDark}
                showLineNumbers
                className="post__syntax"
                customStyle={{ lineHeight: '25px' }}
              >
                {item.syntaxContent}
              </SyntaxHighlighter>
            );
          case 'cliContent':
            return (
              <SyntaxHighlighter
                style={solarizedlight}
                className="post__cli"
                customStyle={{ padding: '40px 20px 25px' }}
              >
                {item.cliContent}
              </SyntaxHighlighter>
            );

          default:
            return null;
        }
      })}
      <Disqus config={disqusConfig} className="post__disquis" />
    </StyledPostLayout>
  );
};

PostLayout.propTypes = {
  data: propTypes.shape({
    datoCmsPost: propTypes.shape({
      title: propTypes.string.isRequired,
      category: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
      featuredImage: propTypes.shape({
        fluid: propTypes.string.isRequired,
      }).isRequired,
      postContent: propTypes.shape({
        map: propTypes.func.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export default PostLayout;
