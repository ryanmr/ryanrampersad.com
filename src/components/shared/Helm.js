import React from "react";
import { Helmet } from "react-helmet";

export default function Helm({ children }) {
  return (
    <Helmet
      defaultTitle={`Ryan Rampersad`}
      titleTemplate={`%s › Ryan Rampersad`}>
      {children}
    </Helmet>
  );
}
