import React from 'react';
import Image from 'gatsby-image';
import propTypes from 'prop-types';
import { Disqus } from 'gatsby-plugin-disqus';
import { graphql, Link } from 'gatsby';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialDark,
  solarizedlight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import StyledPostLayout from './styled/post.styled';
import SEO from '../SEO';
import HomeIcon from '../assets/svg/home.svg';

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

  console.log(data);

  if (data)
    return (
      <>
        <SEO
          title={data.datoCmsPost.title}
          description={data.datoCmsPost.description}
          post
        />
        <StyledPostLayout>
          <nav className="post__nav">
            <Link className="post__nav__previous" to="/posts">
              <HomeIcon /> Wpisy
            </Link>
            &nbsp; - &nbsp;
            <span className="post__nav__current">{data.datoCmsPost.title}</span>
          </nav>
          <div className="post__top">
            <date className="post__top__date">{data.datoCmsPost.date}</date>
            <span className="post__top__category">
              {data.datoCmsPost.category}
            </span>
          </div>
          <span className="post__title">{data.datoCmsPost.title}</span>
          <Image
            fluid={data.datoCmsPost.featuredImage.fluid}
            className="post__featuredImage"
          />

          <span className="post__description">
            {data.datoCmsPost.description}
          </span>
          {data.datoCmsPost.postContent.map(item => {
            const itemKey = Object.keys(item)[2];

            console.log(item);

            switch (itemKey) {
              case 'paragraphContent':
                return (
                  <p className="post__paragraph">{item.paragraphContent}</p>
                );
              case 'imageData':
                return <Image fluid={item.imageData.fluid} />;
              case 'headingContent':
                return <h2 className="post__heading">{item.headingContent}</h2>;
              case 'syntaxContent':
                console.log(item);
                return (
                  <SyntaxHighlighter
                    language={item.language}
                    style={materialDark}
                    showLineNumbers
                    className="post__syntax"
                  >
                    {item.syntaxContent}
                  </SyntaxHighlighter>
                );
              case 'cliContent':
                return (
                  <SyntaxHighlighter
                    style={solarizedlight}
                    className="post__cli"
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
      </>
    );

  return null;
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
