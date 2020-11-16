import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultImage: image
        defaultDescription: description
        siteUrl: url
        author
      }
    }
  }
`;

const SEO = ({ title, description, post, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    author,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
    author,
  };

  return (
    <Helmet title={seo.title}>
      <html lang="pl" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta
        name="google-site-verification"
        content="LvSVKhHP1WVlwuBTctHWmGjQ2MoQhmaxdFwPAFKg8ro"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="keywords"
        content="react, reactywny, programowanie, javascript, blog, computer, science, rozwój, nauka"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(post ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  post: propTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  post: false,
};

export default SEO;
