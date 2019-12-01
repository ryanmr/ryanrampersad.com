import React from "react";
import { Footer } from "./Footer";
import { Ribbon } from "../shared/Ribbon";
import { SiteMeta } from "../shared/SiteMeta";
import { BaseLayout } from "./BaseLayout";

export default function HomepageLayout({ children }) {
  return (
    <>
      <BaseLayout>
        <SiteMeta />
        {children}
        <Footer />
        <Ribbon />
      </BaseLayout>
    </>
  );
}
