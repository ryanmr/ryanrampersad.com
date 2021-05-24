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
      <meta
        property="og:image:alt"
        content="ryan rampersad over the red ribbon"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />

      {/* <meta property="fb:app_id" content="1401488693436528" />
      <meta name="apple-itunes-app" content="app-id=1477376905" />
      <meta
        name="twitter:image:src"
        content="https://opengraph.githubassets.com/15c4475b41e197f7c1d9d6bb7812f260d677bcc41bede57eeb041868faee6fef/ryanmr/ddns-linode"
      />
      <meta name="twitter:site" content="@github" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ryanmr/ddns-linode" />
      <meta
        name="twitter:description"
        content="dynamically set a linode&#39;s A-record to a particular IP - ryanmr/ddns-linode"
      />
      <meta
        property="og:image"
        content="https://opengraph.githubassets.com/15c4475b41e197f7c1d9d6bb7812f260d677bcc41bede57eeb041868faee6fef/ryanmr/ddns-linode"
      />
      <meta
        property="og:image:alt"
        content="dynamically set a linode&#39;s A-record to a particular IP - ryanmr/ddns-linode"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:site_name" content="GitHub" />
      <meta property="og:type" content="object" />
      <meta property="og:title" content="ryanmr/ddns-linode" />
      <meta property="og:url" content="https://github.com/ryanmr/ddns-linode" />
      <meta
        property="og:description"
        content="dynamically set a linode&#39;s A-record to a particular IP - ryanmr/ddns-linode"
      /> */}
    </Helmet>
  );
}
