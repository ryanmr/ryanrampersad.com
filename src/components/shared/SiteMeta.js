import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import ogImage from "../../assets/photos/og-image-1.png";

const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        url
        title
        description
        keywords
        twitter
      }
    }
  }
`;

export function SiteMeta() {
  const { site } = useStaticQuery(query);

  const { pathname } = useLocation();

  const url = `${site.siteMetadata.url}${pathname}`;

  return (
    <Helmet
      title={site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: site.siteMetadata.description,
        },
        { name: "keywords", content: site.siteMetadata.keywords },
      ]}>
      <meta property="og:url" content={url} />
      <meta name="twitter:creator" content={`ryanmr`} />

      <meta property="og:image" content={ogImage} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
}
