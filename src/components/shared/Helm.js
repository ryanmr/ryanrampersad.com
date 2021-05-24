import React from "react";
import { Helmet } from "react-helmet";

export default function Helm({ children, description, title }) {
  return (
    <Helmet
      defaultTitle={`Ryan Rampersad`}
      titleTemplate={`%s › Ryan Rampersad`}>
      {title && (
        <>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="twitter:description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {children}
    </Helmet>
  );
}
