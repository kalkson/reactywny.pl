/* eslint-disable no-undef */
import HomeIcon from 'assets/svg/meta/home.svg';
import Headline from 'components/atoms/Headline/Headline';
import Post from 'components/atoms/Post/Post';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar.styled';
import PostPhoto from 'components/molecules/PostPhoto/PostPhoto';
import NewsletterBar from 'components/organisms/NewsletterBar/NewsletterBar';
import { graphql, Link } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import { GatsbyImage } from 'gatsby-plugin-image';
import useProgressBar from 'hooks/useProgressBar/useProgressBar';
import propTypes from 'prop-types';
import React, { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  darcula as darkTheme,
  solarizedlight as lightTheme,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SEO from 'seo/SEO';
import { formatDate } from 'utils';

import StyledPostLayout from './styled/post.styled';

export const query = graphql`
  query querySingleDatoCMSPost($id: String!, $nextId: String!) {
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
          placeholder: TRACED_SVG
          width: 1920
        )
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
        ... on DatoCmsPostGif {
          id
          gif {
            url
          }
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
    allDatoCmsPost(filter: { id: { eq: $nextId } }) {
      nodes {
        id
        date
        description
        title
        category
        featuredImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            width: 300
          )
        }
      }
    }
  }
`;

const PostLayout = ({ data }) => {
  const header$ = useRef(null);
  const headerHeight = header$.current?.clientHeight;

  const progress = useProgressBar(headerHeight);

  const disqusConfig = data
    ? {
        identifier: data.datoCmsPost.id,
        title: data.datoCmsPost.title,
      }
    : null;

  const postDate = formatDate(data.datoCmsPost.date);
  const previousPost = data.allDatoCmsPost.nodes[0]
    ? data.allDatoCmsPost.nodes[0]
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

        <ProgressBar value={progress} />

        <StyledPostLayout>
          <header className="post__main-info-group" ref={header$}>
            <GatsbyImage
              image={data.datoCmsPost.featuredImage.gatsbyImageData}
              className="post__featuredImage"
              alt=""
              objectFit="cover"
            />
            <div className="container post__headline-wrapper">
              <div className="post__headline-container">
                <Headline className="post__headline">
                  {data.datoCmsPost.title}
                </Headline>
                <div className="post__meta-info-group">
                  <span aria-label="wpis utworzono: ">{postDate}</span>
                  <span aria-label="napisano przez: ">Damian Kalka</span>
                  <span aria-label="kategoria: " className="post__category">
                    {data.datoCmsPost.category}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="container post__grid">
            <div className="post__content">
              <nav className="post__nav">
                <Link to="/" className="post__nav-link">
                  <HomeIcon />
                  Strona główna
                </Link>
                &nbsp; - &nbsp;
                <Link to="/posts" className="post__nav-link">
                  Wpisy
                </Link>
                &nbsp; - &nbsp;
                <span>{data.datoCmsPost.title}</span>
              </nav>

              <p className="post__description">
                {data.datoCmsPost.description}
              </p>

              {data.datoCmsPost.isTabled && (
                <nav className="post__headings-navigation">
                  <h2>Nawigacja</h2>
                  <ul className="post__headings-list">
                    {data.datoCmsPost.postContent.map(item => {
                      const itemKey = Object.keys(item)[1];

                      if (itemKey === 'headingContent')
                        return (
                          <li className="post__headings-item" key={item.id}>
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

                  console.log(itemKey);

                  switch (itemKey) {
                    case 'paragraphContent':
                      return (
                        <div
                          className="post__paragraph"
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.paragraphContent,
                          }}
                        />
                      );

                    // -----------------------------

                    case 'imageData':
                      return <PostPhoto key={item.id} {...item} />;

                    // -----------------------------

                    case 'gif':
                      return <img key={item.id} alt="" src={item.gif.url} />;

                    // -----------------------------

                    case 'headingContent':
                      return (
                        <h2
                          className="post__heading"
                          key={item.id}
                          id={item.id}
                        >
                          {item.headingContent}
                        </h2>
                      );

                    // -----------------------------

                    case 'syntaxContent':
                      return (
                        <div className="post__code-container" key={item.id}>
                          <div
                            className="post__language-note"
                            role="presentation"
                          >
                            {item.language}
                          </div>
                          <SyntaxHighlighter
                            language={item.language}
                            style={darkTheme}
                            showLineNumbers={false}
                            className="post__code"
                            translate="no"
                          >
                            {item.syntaxContent}
                          </SyntaxHighlighter>
                        </div>
                      );

                    // -----------------------------

                    case 'cliContent':
                      return (
                        <div className="post__cli-container" key={item.id}>
                          <div role="presentation" className="post__cli-note">
                            cli
                          </div>
                          <SyntaxHighlighter
                            style={lightTheme}
                            className="post__cli"
                            showLineNumbers={false}
                          >
                            {item.cliContent}
                          </SyntaxHighlighter>
                        </div>
                      );

                    // -----------------------------

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

                    // -----------------------------

                    case 'quoteContent':
                      return (
                        <div
                          className="post__quote"
                          key={item.id}
                          content={item.quoteContent}
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.quoteContent,
                          }}
                        />
                      );

                    // -----------------------------

                    default:
                      return null;
                  }
                })}

              {data.datoCmsPost.postSource && (
                <div className="post__sources">
                  <h3 className="post__sources-heading">Źródła</h3>
                  <ul className="post__sources-list">
                    {JSON.parse(data.datoCmsPost.postSource).sources.map(
                      source => {
                        return (
                          <li key={source} className="post__sources-item">
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
            </div>
            {previousPost && (
              <aside>
                <h3>Przeczytaj także</h3>
                <Post
                  date={previousPost.date}
                  category={previousPost.category}
                  title={previousPost.title}
                  description={previousPost.description}
                  featuredImage={previousPost.featuredImage}
                  className="post__random-post"
                />
              </aside>
            )}
          </div>

          <footer>
            <div className="container">
              <NewsletterBar>
                <>
                  Spodobał ci się post? Dołącz do newslettera, aby być na
                  bieżąco z każdym nowym wpisem na blogu. O innych korzyściach z
                  mojego newslettera dowiesz się{' '}
                  <Link
                    aria-label="odnośnik do opisu newslettera"
                    to="/newsletter"
                  >
                    tutaj.
                  </Link>
                </>
              </NewsletterBar>
              <Disqus config={disqusConfig} className="post__disquis" />
            </div>
          </footer>
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
        url: propTypes.string,
        gatsbyImageData: propTypes.shape(),
      }).isRequired,
    }).isRequired,
    allDatoCmsPost: propTypes.shape({
      nodes: propTypes.arrayOf(propTypes.shape),
    }),
  }),
};

PostLayout.defaultProps = {
  data: {
    allDatoCmsPost: null,
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

export default PostLayout;
