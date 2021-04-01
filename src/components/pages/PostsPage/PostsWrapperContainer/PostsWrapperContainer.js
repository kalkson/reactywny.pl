import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import PostElement from 'components/PostElement/PostElement';
import StyledPostsWrapperContainer from './PostsWrapperContainer.styled';
import StyledPostsWrapper from './PostsWrapper.styled';
import PostWrapperOptions from './PostWrapperOptions/PostWrapperOptions';

const query = graphql`
  {
    allDatoCmsPost(sort: { order: DESC, fields: date }) {
      nodes {
        category
        date
        shortDescription
        title
        id
        featuredImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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

  const handleSelect = e => {
    setActiveCategory(e.target.value);
  };

  return (
    <StyledPostsWrapperContainer className="posts">
      <div className="posts__left-section">
        <h1>Wpisy</h1>

        <p className="posts__left-section__paragraph">
          Nowe wpisy pojawiają się przynajmniej raz w tygodniu - a przynajmniej
          taki jest zamiar. W treści artykułów staram się serwować jak
          najrzetelniejszą wiedzę, tak aby odbiorcy, czyli Wy, mogli mieć
          zaufanie do tego co im prezentuje.
          <br />
          <br />
          Kwestie, które poruszam w mojej twórczości dotyczą twardej jak skała
          strony technicznej, jak również tej miękkiej, o której nie wolno
          zapominać, a która w branży jest nie mniej ważna.
          <br />
          <br />
          Zapraszam do czytania, jak i komentowania.
        </p>
      </div>
      <StyledPostsWrapper className="posts__wrapper">
        <PostWrapperOptions
          handleSwitch={handleSwitch}
          handleChange={handleChange}
          handleSelect={handleSelect}
          categories={categories}
        />
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
              <PostElement
                key={post.id}
                {...post}
                isPicturesDisplayed={isPicturesDisplayed}
              />
            );
          })}
      </StyledPostsWrapper>
    </StyledPostsWrapperContainer>
  );
};

export default PostWrapperContainer;
