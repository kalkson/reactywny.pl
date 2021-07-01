import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Post from '../../../atoms/Post/Post';
import StyledPostsWrapperContainer from './PostsWrapperContainer.styled';
import StyledPostsWrapper from './PostsWrapper.styled';
import PostWrapperOptions from './PostWrapperOptions/PostWrapperOptions';
import Headline from '../../../atoms/Headline/Headline';

const query = graphql`
  {
    allDatoCmsPost(sort: { order: DESC, fields: date }) {
      nodes {
        category
        date
        description
        title
        id
        featuredImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            forceBlurhash: true
          )
        }
      }
    }
  }
`;

const PostWrapperContainer = () => {
  const [isPicturesDisplayed, changePictureDisplay] = useState(true);
  const [searchInputContent, changeSearchInputContent] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const data = useStaticQuery(query);

  const {
    allDatoCmsPost: { nodes },
  } = data;

  useEffect(() => {
    const tmpArray = [];

    nodes.forEach(node => {
      if (!tmpArray.includes(node.category)) tmpArray.push(node.category);
    });

    setCategories(tmpArray);
  }, []);

  const handleSwitch = () => {
    changePictureDisplay(!isPicturesDisplayed);
  };

  const handleChange = e => {
    changeSearchInputContent(e.target.value);
  };

  const handleSelect = value => {
    setActiveCategory(value);
  };

  return (
    <StyledPostsWrapperContainer className="posts container">
      <Headline>Wpisy</Headline>
      <nav role="navigation" className="posts__options">
        <PostWrapperOptions
          handleSwitch={handleSwitch}
          handleChange={handleChange}
          handleSelect={handleSelect}
          categories={categories}
        />
      </nav>
      <StyledPostsWrapper className="posts__wrapper" role="list">
        {nodes
          .filter(post => {
            const tmp = `${post.title} ${post.shortDescription} ${post.category}`;
            return tmp.toLowerCase().includes(searchInputContent.toLowerCase());
          })
          .filter(post => {
            return post.category.includes(activeCategory);
          })
          .map(post => {
            return (
              <Post
                key={post.id}
                {...post}
                isPicturesDisplayed={isPicturesDisplayed}
                role="listitem"
                className="posts__item"
              />
            );
          })}
      </StyledPostsWrapper>
    </StyledPostsWrapperContainer>
  );
};

export default PostWrapperContainer;
