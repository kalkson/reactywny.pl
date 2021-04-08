import React from 'react';
import PostWrapperContainer from 'components/pages/PostsPage/PostsWrapperContainer/PostsWrapperContainer';
import SEO from '../seo/SEO';
import PageHeader from '../components/organisms/PageHeader/PageHeader';
import PageFooter from '../components/molecules/PageFooter/PageFooter';

const PostsPage = () => (
  <>
    <SEO
      title="reactywny.pl - wszystkie wpisy"
      description="Wszystkie wpisy blogowe dodane na reactywny.pl - tematyka: IT, rozwój, programowanie, internet oraz wszystko co związane z umiejętnościami miękkimi w branży"
    />
    <PageHeader />
    <PostWrapperContainer />
    <PageFooter />
  </>
);

export default PostsPage;
