import React from "react";
import { Footer } from "./Footer";
import { SiteMeta } from "../shared/SiteMeta";
import { Header } from "./Header";
import { BaseLayout } from "./BaseLayout";

export default function GeneralLayout({ children }) {
  return (
    <>
      <BaseLayout>
        <SiteMeta />
        <Header />
        {children}
        <Footer />
      </BaseLayout>
    </>
  );
}
