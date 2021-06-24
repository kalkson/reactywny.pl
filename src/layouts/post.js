import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import { Disqus } from 'gatsby-plugin-disqus';
import { graphql, Link } from 'gatsby';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  xonokai as materialDark,
  solarizedlight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import StyledPostLayout from './styled/post.styled';
import SEO from '../seo/SEO';
import HomeIcon from '../assets/svg/home.svg';
import withNewsletter from '../hoc/withNewsletter';
import Adnotation from '../components/molecules/Adnotation/Adnotation';
import PostParagraph from '../components/molecules/PostParagraph/PostParagraph';

export const query = graphql`
  query querySingleDatoCMSPost($id: String!) {
    datoCmsPost(id: { eq: $id }) {
      id
      date
      description
      title
      postSource
      isTabled
      featuredImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 1920
          forceBlurhash: true
        )
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
          postImageSign
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
        ... on DatoCmsPostVideo {
          id
          videoLink {
            height
            width
            url
            title
          }
        }
        ... on DatoCmsPostEmbed {
          id
          embedContent
        }
        ... on DatoCmsPostQuote {
          id
          quoteContent
        }
      }
    }
  }
`;

const PostLayout = ({ data }) => {
  const disqusConfig = data
    ? {
        identifier: data.datoCmsPost.id,
        title: data.datoCmsPost.title,
      }
    : null;

  if (data)
    return (
      <>
        <SEO
          title={`${data.datoCmsPost.title} - reactywny.pl`}
          description={data.datoCmsPost.description}
          post
          image={data.datoCmsPost.featuredImage.url}
        />
        <div className="container">
          <StyledPostLayout>
            <nav className="post__nav">
              <Link className="post__nav__previous" to="/posts">
                <HomeIcon /> Wpisy
              </Link>
              &nbsp; - &nbsp;
              <span className="post__nav__current">
                {data.datoCmsPost.title}
              </span>
            </nav>
            <div className="post__top">
              <time className="post__top__date">{data.datoCmsPost.date}</time>
              <span className="post__top__category">
                {data.datoCmsPost.category}
              </span>
            </div>
            <h1 className="post__title">{data.datoCmsPost.title}</h1>
            <GatsbyImage
              image={data.datoCmsPost.featuredImage.gatsbyImageData}
              className="post__featuredImage"
            />

            <span className="post__description">
              {data.datoCmsPost.description}
            </span>
            {data.datoCmsPost.isTabled && (
              <nav className="post__navHead">
                <h4>Nawigacja</h4>
                <ul className="post__navHead__list">
                  <br />
                  {data.datoCmsPost.postContent.map(item => {
                    const itemKey = Object.keys(item)[1];

                    if (itemKey === 'headingContent')
                      return (
                        <li className="post__navHead__list__item" key={item.id}>
                          <a href={`#${item.id}`}>{item.headingContent}</a>
                        </li>
                      );

                    return null;
                  })}
                </ul>
              </nav>
            )}
            {data.datoCmsPost.postContent &&
              data.datoCmsPost.postContent.map(item => {
                const itemKey = Object.keys(item)[1];

                switch (itemKey) {
                  case 'paragraphContent':
                    return (
                      <PostParagraph
                        className="post__paragraph"
                        key={item.id}
                        content={item.paragraphContent}
                      />
                    );
                  case 'imageData':
                    return (
                      <div className="post__photo" key={item.id}>
                        {/* <Image
                        className="post__photo__image"
                        fluid={item.imageData.fluid}
                        style={{ width: '100%' }}
                      /> */}
                        <GatsbyImage
                          className="post__photo__image"
                          image={item.imageData.gatsbyImageData}
                          // fluid={item.imageData.fluid}
                          // style={{ width: '100%' }}
                        />
                        <span className="post__photo__sign">
                          {item.postImageSign}
                        </span>
                      </div>
                    );
                  case 'headingContent':
                    return (
                      <h2 className="post__heading" key={item.id} id={item.id}>
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
                  case 'videoLink':
                    return (
                      <iframe
                        key={item.videolink.title}
                        className="post__video"
                        title={item.videoLink.title}
                        src={item.videoLink.url.replace('watch?v=', 'embed/')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  case 'quoteContent':
                    return (
                      <PostParagraph
                        className="post__quote"
                        key={item.id}
                        content={item.quoteContent}
                      />
                    );

                  default:
                    return null;
                }
              })}
            {data.datoCmsPost.postSource && (
              <div className="post__source">
                <h4 className="post__source__heading">Źródła</h4>
                <ul className="post__source__list">
                  {JSON.parse(data.datoCmsPost.postSource).sources.map(
                    source => {
                      return (
                        <li key={source} className="post__source__list__item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={source}
                          >
                            {source}
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            )}
            <Adnotation />
            <Disqus config={disqusConfig} className="post__disquis" />
          </StyledPostLayout>
        </div>
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
      postSource: propTypes.string,
      isTabled: propTypes.bool,
      postContent: propTypes.oneOfType([
        propTypes.array,
        propTypes.node,
        propTypes.shape,
        propTypes.string,
      ]),
      featuredImage: propTypes.shape({
        fluid: propTypes.shape(),
        url: propTypes.string.isRequired,
        gatsbyImageData: propTypes.shape(),
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
      isTabled: false,
      postSource: null,
    },
  },
};

export default withNewsletter(PostLayout);
