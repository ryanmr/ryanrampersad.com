import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";

export function SiteMeta() {
  const query = graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            { name: "keywords", content: data.site.siteMetadata.keywords },
          ]}
        />
      )}
    />
  );
}
