import React from "react";
import { Footer } from "./Footer";
import { SiteMeta } from "../shared/SiteMeta";
import { GlobalStyle } from "../shared/GlobalStyle";
import { Header } from "./Header";

export default function GeneralLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <SiteMeta />
      <Header />
      {children}
      <Footer />
    </>
  );
}
