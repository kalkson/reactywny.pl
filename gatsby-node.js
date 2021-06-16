const path = require('path');
const slugify = require('slugify');

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         src: path.resolve(__dirname, 'src'),
//       },
//     },
//   });
// };

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
      }
    }
  `);

  result.data.allDatoCmsPost.nodes.forEach(post => {
    createPage({
      path: `posts/${slugify(post.title, { lower: true })}`,
      component: PostTemplate,
      context: {
        id: post.id,
      },
    });
  });
};
