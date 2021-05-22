import React from 'react';
import PostWrapperContainer from 'components/pages/PostsPage/PostsWrapperContainer/PostsWrapperContainer';
import SEO from '../seo/SEO';

const PostsPage = () => (
  <>
    <SEO
      title="reactywny.pl - wszystkie wpisy"
      description="Wszystkie wpisy blogowe dodane na reactywny.pl - tematyka: IT, rozwój, programowanie, internet oraz wszystko co związane z umiejętnościami miękkimi w branży"
    />
    <PostWrapperContainer />
  </>
);

export default PostsPage;
