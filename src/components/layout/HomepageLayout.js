import React from "react";
import { Footer } from "./Footer";
import { Ribbon } from "../shared/Ribbon";
import { SiteMeta } from "../shared/SiteMeta";
import { GlobalStyle } from "../shared/GlobalStyle";

export default function HomepageLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <SiteMeta />
      {children}
      <Footer />
      <Ribbon />
    </>
  );
}
