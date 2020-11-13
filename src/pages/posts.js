import React from 'react';
import PostWrapperContainer from 'components/pages/PostsPage/PostsWrapperContainer/PostsWrapperContainer';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';

const PostsPage = () => (
  <>
    <PageHeader />
    <PostWrapperContainer />
    <PageFooter />
  </>
);

export default PostsPage;
