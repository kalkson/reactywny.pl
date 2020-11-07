const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsPost {
        nodes {
          title
          id
        }
      }
    }
  `);

  result.data.allDatoCmsPost.nodes.forEach(post => {
    createPage({
      path: `posts/${slugify(post.title, { lower: true })}`,
      component: PostTemplate,
      context: {
        postId: post.id,
      },
    });
  });
};
