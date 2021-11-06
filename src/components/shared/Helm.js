import React from "react";
import { Helmet } from "react-helmet";

// this gets around a documented issue
// of having fragments inside of a react-helmet enclosure
// though prior to this commit, the fragment approach worked
// https://github.com/nfl/react-helmet/issues/342
function LocalHelmet({ children, ...props }) {
  return (
    <Helmet
      {...props}
      defaultTitle={`Ryan Rampersad`}
      titleTemplate={`%s › Ryan Rampersad`}>
      {children}
    </Helmet>
  );
}

export default function Helm({ children, description, title }) {
  return (
    <>
      {title ? (
        <LocalHelmet>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </LocalHelmet>
      ) : (
        <LocalHelmet>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </LocalHelmet>
      )}

      {description ? (
        <LocalHelmet>
          <meta name="twitter:description" content={description} />
          <meta property="og:description" content={description} />
        </LocalHelmet>
      ) : (
        <LocalHelmet>
          <meta
            name="twitter:description"
            content={"Visit ryanrampersad.com for more"}
          />
          <meta
            property="og:description"
            content={"Visit ryanrampersad.com for more"}
          />
        </LocalHelmet>
      )}
      <LocalHelmet>{children}</LocalHelmet>
    </>
  );
}
