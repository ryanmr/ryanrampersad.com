import React from "react";
import { Helmet } from "react-helmet";

export default function Helm({ children, description, title }) {
  return (
    <Helmet
      defaultTitle={`Ryan Rampersad`}
      titleTemplate={`%s › Ryan Rampersad`}>
      {title ? (
        <>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      ) : (
        <>
          <meta property="og:title" content={`Ryan Rampersad`} />
          <meta name="twitter:title" content={`Ryan Rampersad`} />
        </>
      )}
      {description ? (
        <>
          <meta name="twitter:description" content={description} />
          <meta property="og:description" content={description} />
        </>
      ) : (
        <>
          <meta
            name="twitter:description"
            content={"Visit ryanrampersad.com for more"}
          />
          <meta
            property="og:description"
            content={"Visit ryanrampersad.com for more"}
          />
        </>
      )}
      {children}
    </Helmet>
  );
}
