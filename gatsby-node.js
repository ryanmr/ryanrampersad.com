/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, _) => {
    if (page.path === "/") {
      page.layout = "homepage";
      createPage(page);
    }

    resolve();
  });
};
