import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import ogImage from "../../assets/photos/og-image-2.png";

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
    <Helmet title={site.siteMetadata.title}>
      <meta property="description" content={site.siteMetadata.description} />
      <meta property="keywords" content={site.siteMetadata.keywords} />

      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:url" content={url} />

      <meta property="og:type" content="object" />
      <meta property="og:image" content={ogImage} />
      <meta
        property="og:image:alt"
        content="ryan rampersad over the red ribbon"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />

      <meta property="twitter:image" content={ogImage} />

      <meta name="twitter:creator" content={`ryanmr`} />
      <meta name="twitter:site" content="@ryanmr" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ryanrampersad.com" />
      <meta
        name="twitter:description"
        content={site.siteMetadata.description}
      />

      <link href="https://mastodon.cloud/@ryanmr" rel="me" />
    </Helmet>
  );
}
