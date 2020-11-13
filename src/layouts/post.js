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
// import slugify from 'slugify';
import StyledPostLayout from './styled/post.styled';
import SEO from '../SEO';
import HomeIcon from '../assets/svg/home.svg';
import withNewsletter from '../components/hoc/withNewsletter';

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
        url
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
  const disqusConfig = data
    ? {
        // url: slugify(data.datoCmsPost.title, { lower: true }),
        identifier: data.datoCmsPost.id,
        title: data.datoCmsPost.title,
      }
    : null;

  if (data)
    return (
      <>
        <SEO
          title={data.datoCmsPost.title}
          description={data.datoCmsPost.description}
          post
          image={data.datoCmsPost.featuredImage.url}
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
            <time className="post__top__date">{data.datoCmsPost.date}</time>
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
          {data.datoCmsPost.postContent &&
            data.datoCmsPost.postContent.map(item => {
              const itemKey = Object.keys(item)[2];

              switch (itemKey) {
                case 'paragraphContent':
                  return (
                    <p className="post__paragraph" key={item.id}>
                      {item.paragraphContent}
                    </p>
                  );
                case 'imageData':
                  return <Image key={item.id} fluid={item.imageData.fluid} />;
                case 'headingContent':
                  return (
                    <h2 className="post__heading" key={item.id}>
                      {item.headingContent}
                    </h2>
                  );
                case 'syntaxContent':
                  return (
                    <SyntaxHighlighter
                      language={item.language}
                      style={materialDark}
                      showLineNumbers
                      className="post__syntax"
                      key={item.id}
                    >
                      {item.syntaxContent}
                    </SyntaxHighlighter>
                  );
                case 'cliContent':
                  return (
                    <SyntaxHighlighter
                      style={solarizedlight}
                      className="post__cli"
                      key={item.id}
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
      id: propTypes.string,
      title: propTypes.string.isRequired,
      category: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
      postContent: propTypes.arrayOf(
        propTypes.shape(
          propTypes.oneOfType([propTypes.string, propTypes.shape])
        )
      ),
      featuredImage: propTypes.shape({
        fluid: propTypes.shape(propTypes.string),
        url: propTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }),
};

PostLayout.defaultProps = {
  data: {
    datoCmsPost: {
      featuredImage: {
        fluid: null,
      },
      postContent: null,
    },
  },
};

export default withNewsletter(PostLayout);
