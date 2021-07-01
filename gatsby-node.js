const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsPost(sort: { order: DESC, fields: date }) {
        nodes {
          title
          id
        }
        edges {
          next {
            id
          }
        }
      }
    }
  `);

  result.data.allDatoCmsPost.nodes.forEach((post, index) => {
    console.log(post.id);
    createPage({
      path: `posts/${slugify(post.title, { lower: true })}`,
      component: PostTemplate,
      context: {
        id: post.id,
        nextId: result.data.allDatoCmsPost.edges[index].next
          ? result.data.allDatoCmsPost.edges[index].next.id
          : '',
      },
    });
  });
};
